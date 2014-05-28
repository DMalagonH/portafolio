Portfolio.Views.TagsListView = Backbone.View.extend({
	render: function () {
		this.collection.forEach(this.addOne, this);
	},
	addOne: function (tag) {
		var tagView = new Portfolio.Views.TagView({ model: tag });
		this.$el.append(tagView.render().el);
	},
    events: {
        "click .label": "filterCategory" 
    },
    filterCategory: function(){
        
        console.log("click");
    }
    
});