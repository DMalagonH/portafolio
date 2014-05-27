Portfolio.Models.ProjectModel = Backbone.Model.extend({
	defaults: {
        id:             null,
		title:          null,
		description:    null,
        img:            null,
		link:           null,
        date:           null,
        features:       []
	}
});