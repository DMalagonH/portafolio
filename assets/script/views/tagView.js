Portfolio.Views.TagView = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.model, "change", this.render, this);
	},
	tagName: "span",
	className: "label label-primary",
	render: function(){
		this.$el.text(this.model.get("title"));
		return this;
	}
});