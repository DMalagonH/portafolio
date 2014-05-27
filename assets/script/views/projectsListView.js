Portfolio.Views.ProjectsListView = Backbone.View.extend({
    el: $(".project-list"),
    template: _.template($("#project-list-tmpl").html()),
    render: function(){
        var html = this.template({projects: this.collection.toJSON()});
        this.$el.html(html);
    }
});


