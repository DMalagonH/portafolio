Portfolio.Views.ProjectDetailView = Backbone.View.extend({
    el: $("#project-detail"),
    template: _.template($("#project-detail-tmpl").html()),
    render: function(){
        var html = this.template(this.model.toJSON());
        this.$el.html(html);
    }
});
