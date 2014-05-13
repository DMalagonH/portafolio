Portfolio.Views.SkillVieww = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.model, "change", this.render, this);
	},
	tagName: "li",
	className: "",
	template: _.template($("#skill-tmpl").html()),
	render: function(){
		var html = this.template(this.model.toJSON());
		this.$el.html(html);
	}
});