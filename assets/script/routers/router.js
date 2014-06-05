Portfolio.Router = Backbone.Router.extend({
	routes: {
		"": "indexAction",
		"portafolio": "portfolioAction",
        "proyecto/:id": "projectAction"
	},
	initialize: function () {
		// User profile
		this.user = new Portfolio.Models.UserModel();
        this.userView = new Portfolio.Views.UserView({model: this.user});

		// User skills
		this.skills = new Portfolio.Collections.SkillsCollection();
		this.skillListView = new Portfolio.Views.SkillListView({ collection: this.skills });
		this.skillCategories = new Portfolio.Collections.TagsCollection();

        // Projects
        this.importantProject = new Portfolio.Models.ProjectModel();
        this.projects = new Portfolio.Collections.ProjectsCollection();
        this.projectCategories = new Portfolio.Collections.TagsCollection();
        
		// fetch and render user info
		this.fetchUserProfile();

		// fetch and render skills list
		this.fetchSkills();
        
        // fetch and render projects
        this.fetchProjects();

		Backbone.history.start();
	},
    displaySection: function(section_name){
        
        // scroll to top
        $(window).scrollTop(0);
        
        // hide sections
		$("section.section-page").hide();
        
        // show section with id section_name
		$("section#"+section_name).show();
	},
    getCategories: function(collection, categories_collection, el){
        
        // categories array with first default category "Todo"
        var categories_array = [{title: "Todo"}];
        
        // search categories on projects collection
        collection.each(function(item){
            _.each(item.get("categories"), function(category){
                // search if category already exists in array
				if(!_.findWhere(categories_array, {title: category})){
					categories_array.push({title: category});
				}
            });
        });
        
        // reset categories collection
        categories_collection.reset(categories_array);
        
        // create view for categories
        var tagsView = new Portfolio.Views.TagsListView({collection: categories_collection, el: el});
        
        // render view
        //tagsView.render();
    },
    
	// Index functions
	indexAction: function(){
        
		// display section tag with id me
		this.displaySection("me");

	},	
	fetchUserProfile: function(){
        // if user is empty
        if(this.user.get("name") === null){
        
            var self = this;

            // ajax request for json user
            var xhr = $.getJSON("data/user.json");

            // success response
            xhr.done(function(response){
                // set user properties from response 
                self.user.set(response);

                // render user profile
                self.userView.renderProfile();
            });
        }
	},
	fetchSkills: function(){
        // if skill collections is empty
        if(this.skills.length === 0){
        
            var self = this;

            // ajax request for json skills
            var xhr = $.getJSON("data/skills.json");

            // success response
            xhr.done(function(response){
                // reset skills with json response
                self.skills.reset(response);
                
                // get and render project categories
                self.getCategories(self.skills, self.skillCategories, $(".skill-tags"));                
            });
        }
	},
	

	// Portfolio functions
	portfolioAction: function(){
		// display section tag with id portfolio
		this.displaySection("portfolio");
	},
    fetchProjects: function(callback){
        if(this.projects.length === 0){
            var self = this;

            // ajax request for json projects
            var xhr = $.getJSON("data/projects.json");

            // success response
            xhr.done(function(response){
                // reset projects with json response
                self.projects.reset(response);

                // find important project
                self.importantProject = self.projects.findWhere({"important": true});
                
                // Render important project
                var importantProjectView = new Portfolio.Views.ImportantProjectView({model: self.importantProject});
                importantProjectView.render();

                // Render project list
                var projectListView = new Portfolio.Views.ProjectsListView({collection: self.projects});
                projectListView.render();
                
                // get and render project categories
                self.getCategories(self.projects, self.projectCategories, $(".project-tags"));
                
                self.executeCallback(callback);
            });
        }
        else{
            this.executeCallback(callback);
        }
    },
    executeCallback: function(callback){
        if(typeof(callback) === "function"){
            callback();
        }
    },
    
    // Project detail functions
    projectAction: function(id){
        // display section tag with id portfolio
		this.displaySection("project-detail");
        
        var self = this;
        
        // if not yet loaded projects collection
        if(this.projects.length === 0){
            // add event reset to projects collection
            this.projects.on("reset", function(){
                // fetch and render project
                self.fetchProject(id);
            });
        }
        else{
            // fetch and render project
            self.fetchProject(id);
        }
    },
    fetchProject: function(id){
        
        var project = this.projects.get(id);
        var view = new Portfolio.Views.ProjectDetailView({model: project});
        
        view.render();
        
        
        
        return this.projects.get(id);
    },
});