Portfolio.Router = Backbone.Router.extend({
	routes: {
		"": "index",
		"portafolio": "portfolio",
		"contacto": "contact"
	},
	initialize: function () {
		// User profile
		this.user = new Portfolio.Models.UserModel();

		// User skills
		this.skills = new Portfolio.Collections.SkillsCollection();
		this.skillListView = new Portfolio.Views.SkillListView({ collection: this.skills });
		this.skillCategories = new Portfolio.Collections.TagsCollection();



		Backbone.history.start();
	},

	// Index functions
	index: function(){
		console.info("Index");

		// display section tag with id me
		this.displaySection("me");

		// fetch user info
		this.fetchUserProfile();

		// fetch skills list
		this.fetchSkills();
	},	
	fetchUserProfile: function(){
		var self = this;

		// ajax request for json user
		var xhr = $.getJSON("data/user.json");

		// success response
		xhr.done(function(response){
			// set user properties from response 
			self.user.set(response);

			console.log(self.user.toJSON());
		});
	},
	fetchSkills: function(){
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

	displaySection: function(section_name){
		$("section.section-page").hide();

		$("section#"+section_name).show();
	},

	// Portfolio functions
	portfolio: function(){
		console.info("Portafolio");

		// display section tag with id portfolio
		this.displaySection("portfolio");
	},


	// Contact functions
	contact: function(){
		console.info("Portafolio");

		// display section tag with id contact
		this.displaySection("contact");
	},

});