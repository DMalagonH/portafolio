$(function() {
  Portfolio.app = new Portfolio.Router();
});

// Ejemplo

/*
Portfolio = {};

Portfolio.UserModel = Backbone.Model.extend({
	initialize: function(){

	},
	defaults: {
		name: 				null,
		avatar: 			null,
		career: 			null,
		second_career: 		null,
		biography: 			null, 
		city: 				null,
		mobile: 			null,
		email: 				null, 
		github: 			null,
		twitter: 			null,
		linkedin: 			null,
	}
});

Portfolio.UserView = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.model, "change", this.render, this);
	},
	tagName: "div",
	className: "test",
	template: _.template($("#user-tmpl").html()),
	render: function(){
		var user = this.model;

		var html = this.template(this.model.toJSON());

		this.$el.html(html);
	},
	events: {
		"click .title" : "click"
	},
	click: function(e){
		console.log("click en titulo")
	}

});

Portfolio.SkillModel = Backbone.Model.extend({});

Portfolio.SkillCollection = Backbone.Collection.extend({
	model: Portfolio.SkillModel
});


Portfolio.Router = Backbone.Router.extend({
	routes: {
		"": "index",
		"test/:val": "test"
	},

	index: function(){
		console.log("index");
	},
	test: function(val){
		console.log("test", val);
	}
});

Portfolio.app = new Portfolio.Router();

Backbone.history.start();

window.Portfolio = Portfolio;
*/