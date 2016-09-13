Template.NewRecipe.events({
	'click .fa-close': function () {
		Session.set('newRecipe', false);
	},
    'submit #insertRecipe': function(event, template) {
    	Session.set('newRecipe', false)
    },

});

