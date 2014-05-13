Portfolio.Router = Backbone.Router.extend({
	routes: {
		"": "index",
		"portfolio": "portfolio"
	},
	initialize: function () {
		this.current = {};
		this.jsonData = {};
		this.skills = new Portfolio.Collections.SkillCollection();
		this.skillView = new Portfolio.Views.Skills({ collection: this.skills });

		Backbone.history.start();
	},
	index: function(){
		console.log("Index");
	},
	portfolio: function(){
		console.log("Portafolio");
	}
});