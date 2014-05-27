Portfolio.Router = Backbone.Router.extend({
	routes: {
		"": "index",
		"portafolio": "portfolio"
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

		Backbone.history.start();
	},
    displaySection: function(section_name){
		$("section.section-page").hide();

		$("section#"+section_name).show();
	},
    
	// Index functions
	index: function(){
        var self = this;
        
		// display section tag with id me
		this.displaySection("me");

		// fetch user info
		this.fetchUserProfile(function(){
            // render user profile
            self.userView.renderProfile();
        });

		// fetch skills list
		this.fetchSkills();
	},	
	fetchUserProfile: function(callback){
        // if user is empty
        if(this.user.get("name") === null){
        
            var self = this;

            // ajax request for json user
            var xhr = $.getJSON("data/user.json");

            // success response
            xhr.done(function(response){
                // set user properties from response 
                self.user.set(response);

                // execute callback
                if(typeof(callback) === "function"){
                    callback();
                }
            });
        }
        else{
            // execute callback
            if(typeof(callback) === "function"){
                callback();
            }
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

                // get skill categories from skill collection
                self.getSkillCategories();
            });
        }
	},
	getSkillCategories: function(){
		
		// categories array with first default category "Todo"
		var categories_array = [{title: "Todo"}];

		// search categories on skill collection
		this.skills.each(function(skill){
			_.each(skill.get("categories"), function(category){

				// search if category already exists in array
				if(!_.findWhere(categories_array, {title: category})){
					categories_array.push({title: category});
				}
			});
		});

		// set array skills on collection
		this.skillCategories.reset(categories_array);

		// create view for categories
		var tagsView = new Portfolio.Views.TagsListView({collection: this.skillCategories, el: $(".skill-tags")});

		// render view
		tagsView.render();
	},

	

	// Portfolio functions
	portfolio: function(){
		// display section tag with id portfolio
		this.displaySection("portfolio");
        
        // Fetch and render projects
        this.fetchProjects();
	},

    fetchProjects: function(){
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
            });
        }
    }

});