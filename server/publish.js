Meteor.publish('recipes', function() {
	return Recipes.find({author: this.userId}); //only current user recipes are published
});

Meteor.publish('singleRecipe', function(id) {
	check(id, String);
	return Recipes.find({_id: id}); //only one recipe must be published
});