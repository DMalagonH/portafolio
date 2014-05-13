Portfolio.Models.UserModel = Backbone.Model.extend({
	initialize: function(){

	},
	defaults: {
		name: 				null,
		avatar: 			null,
		career: 			null,
		second_career: 		null,
		biography: 			null, 
		city: 				null,
		mobile: 			null,
		email: 				null, 
		github: 			null,
		twitter: 			null,
		linkedin: 			null,
	}
});