Portfolio.Views.TagsListView = Backbone.View.extend({
	initialize: function () {
		this.listenTo(this.collection, "reset", this.render, this);
	},

	render: function () {
		this.collection.forEach(this.addOne, this);
	},

	addOne: function (tag) {
		var tagView = new Portfolio.Views.TagView({ model: tag });
		this.$el.append(tagView.render().el);
	}
});