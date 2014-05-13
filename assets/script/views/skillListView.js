Portfolio.Views.SkillListView = Backbone.View.extend({
	el: $(".skills-list"),

	template: _.template($("#skill-tmpl").html()),
	
	initialize: function () {
		this.listenTo(this.collection, "reset", this.render, this);
		this.listenTo(this.collection, "add", this.addOne, this);
	},

	render: function () {
		this.collection.forEach(this.addOne, this);
	},

	addOne: function (skill) {
		var skillView = new Portfolio.Views.SkillView({ model: skill });
		this.$el.append(skillView.render().el);
	}
});