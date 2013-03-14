define([ "Backbone", "HomeView", "ListBooksView" ], function(Backbone, HomeView, ListBooksView) {
	Router = Backbone.Router.extend({
		routes : {
			"" : "homeAction",
			"listBooks" : "listBooksAction",
			".*" : "defaultAction",
		},
		homeAction : function() {
			console.log('Router - homeAction');
			if (!this.homeView) {
				this.homeView = new HomeView();
			}
			console.log('Router - homeAction - render');
			return this.homeView.render();
		},
		listBooksAction : function(){
			console.log('Router - listBooks');
			if (!this.listBooksView) {
				this.listBooksView = new ListBooksView();
			}
			console.log('Router - listBooks - render');
			return this.listBooksView.render();
		},
		defaultAction : function(actions) {
			console.log("Fail : No route found at " + actions);
			return this.homeAction();
		}
	});
	console.log('Router');
	return Router;
});
