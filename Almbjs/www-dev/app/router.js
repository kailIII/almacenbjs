define([ "Backbone", "AddBookView","HomeView", "ListBooksView" ], function(Backbone, AddBookView, HomeView, ListBooksView) {
	Router = Backbone.Router.extend({
		routes : {
			"" : "homeAction",
			"addBook" : "addBookAction",
			"listBooks" : "listBooksAction",
			".*" : "defaultAction",
		},
		addBookAction : function(){
			console.log('Router - addBookAction');
			this.addBookView = new AddBookView();
			console.log('Router - addBookAction - render');
			return this.addBookView.render();
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
