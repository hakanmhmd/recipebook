FlowRouter.route('/', {
	name: 'home',
	action(){
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/recipes', {
	name: 'recipes',
	action(){
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Recipes'});
	}
});