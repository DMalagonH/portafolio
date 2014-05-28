Portfolio.Views.TagView = Backbone.View.extend({
	tagName: "span",
	className: "label label-primary",
    render: function(){
		this.$el.text(this.model.get("title"));
		return this;
	}
});