define([ "underscore", "Backbone", "jquery", "BookCollectionRest", "text!templates/listBooksTemplate.html" ], 
		function(_, Backbone, $, BookCollection, listBooksTemplate) {
	var HomeView = Backbone.View.extend({
		el : $("#content"),
		template : _.template(listBooksTemplate),
		events: {
			"click #addBook" : "addBook"
		},
		render : function() {
			console.log('ListBooks - render');
			var ltBooks = new BookCollection();
			var self = this;
			ltBooks.fetch({
				success : function() {
					console.log('ListBooks - fetch - success');
					sessionStorage.setItem("findBooks", JSON.stringify(ltBooks));
					$(self.el).html(self.template({
						books : ltBooks.models
					}));
				},
				error : function(model, xhr, options){
					console.log('ListBooks - fetch - error');
					console.log('ListBooks - fetch - model '+model);
					console.log('ListBooks - fetch - xhr '+xhr);
					console.log('ListBooks - fetch - options '+options);
				}
			});
			return this;
		},
		addBook : function(){
			console.log('ListBooksView - addBook');
	    	Backbone.history.navigate('addBook', true); 
		}
	});
	return HomeView;
});