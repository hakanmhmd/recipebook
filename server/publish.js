Meteor.publish('recipes', function() {
	return Recipes.find({author: this.userId}); //only current user recipes are published
});