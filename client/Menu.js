// Template level subscribtion
Template.Menu.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('recipes');
	});
});

Template.Menu.helpers({
	getMenu: () => {
		return Recipes.find({inMenu: true});
	}
});