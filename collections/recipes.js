Recipes = new Meteor.Collection('recipes');
RecipeSchema = new SimpleSchema({
	name: {type: String, label: "Name"},
	desc: {type: String, label: "Desciption"},
	author: {type: String, label: "Author", autoValue: function() { return this.userId }},
	createdAt: {type: Date, label: "Created at", autoValue: function() { return new Date() }}
});

Recipes.attachSchema(RecipeSchema);