// Template level subscribtion
Template.Recipes.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('recipes');
	});
});

Template.Recipes.helpers({
	getRecipes: () => {
		return Recipes.find({});
	}
});