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
		this.skillCollection = new Portfolio.Collections.SkillsCollection();
		this.skillListView = new Portfolio.Views.SkillListView({ collection: this.skillCollection });
		this.skillCategories = [];


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
			// reset skillCollection with json response
			self.skillCollection.reset(response);

			// get skill categories from skill collection
			self.getSkillCategories();
		});
	},
	getSkillCategories: function(){
		var self = this;

		this.skillCollection.each(function(skill){
			_.each(skill.get("categories"), function(category){

				// search if category already exists
				if(!_.findWhere(self.skillCategories, category)){
					self.skillCategories.push(category);
				}
			});
		});


		console.log(this.skillCategories);
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