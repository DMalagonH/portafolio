Portfolio.Views.ImportantProjectView = Backbone.View.extend({
    tagName: "container",
	className: "div",
    el: $("#important-project"),
    template: _.template($("#important-project-tmpl").html()),
    render: function(){
        var html = this.template(this.model.toJSON());
        this.$el.html(html);
        return this;
    }
});

