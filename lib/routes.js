Accounts.onLogin(function() {
	FlowRouter.go('recipes');
});

Accounts.onLogout(function() {
	FlowRouter.go('home');
});

FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()){
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/', {
	name: 'home',
	action(){
		//GAnalytics.pageview();
		if(Meteor.userId()){
			FlowRouter.go('recipes');
		}
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/recipes', {
	name: 'recipes',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Recipes'});
	}
});

FlowRouter.route('/recipe/:id', {
	name: 'recipe',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
	}
});

FlowRouter.route('/menu', {
	name: 'menu',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Menu'});
	}
});

FlowRouter.route('/shopping-list', {
	name: 'shopping-list',
	action(){
		BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
	}
});