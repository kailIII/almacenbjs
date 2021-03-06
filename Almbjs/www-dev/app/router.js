define([ "Backbone", "AddBookView","DetailBookView", "HomeView", "ListBooksView" ], function(Backbone, AddBookView, DetailBookView, HomeView, ListBooksView) {
	Router = Backbone.Router.extend({
		routes : {
			"" : "homeAction",
			"addBook" : 		"addBookAction",
			"detail/:idBook/": 	"detailBookction",
			"listBooks" : 		"listBooksAction",
			".*" : 				"defaultAction"
		},
		addBookAction : function(){
			console.log('Router - addBookAction');
			this.addBookView = new AddBookView();
			console.log('Router - addBookAction - render');
			return this.addBookView.render();
		},
		detailBookction : function (idBook){
			console.log('detailBookAction');
			console.log('idBook '+idBook);
			 this.detailBookView = new DetailBookView({idBook: idBook});
		     return this.detailBookView.render();
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
