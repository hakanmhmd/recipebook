// Template level subscribtion
Template.RecipeSingle.onCreated(function() {
	var self = this;
	self.autorun(function() {
		var id = FlowRouter.getParam('id');
		self.subscribe('singleRecipe', id);
	});
});

Template.RecipeSingle.helpers({
	getRecipe: () => {
		var id = FlowRouter.getParam('id');
		return Recipes.findOne({_id: id});
	}
});