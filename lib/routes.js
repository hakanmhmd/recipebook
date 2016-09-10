FlowRouter.route('/', {
	name: 'home',
	action(){
		//GAnalytics.pageview();
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