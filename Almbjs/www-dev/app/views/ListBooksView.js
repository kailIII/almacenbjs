define([ "underscore", "Backbone", "jquery", "BookCollectionRest", "text!templates/listBooksTemplate.html" ], 
		function(_, Backbone, $, BookCollection, listBooksTemplate) {
	var HomeView = Backbone.View.extend({
		el : $("#content"),
		template : _.template(listBooksTemplate),
		events: {
			"click #addBook" : "addBook",
			"click .btnEditBook" : "editBook",
			"click .btnDeleteBook": "deleteBook"
		},
		render : function() {
			console.log('ListBooks - render');
			var ltBooks = new BookCollection();
			var self = this;
			console.log('ListBooks - render - fetch');
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
			console.log('ListBooks - render - end');
			return this;
		},
		addBook : function(){
			console.log('ListBooksView - addBook');
	    	Backbone.history.navigate('addBook', true); 
		},
		editBook : function(event){
			console.log('ListBooksView - editBook');
			console.log('idBook: '+$(event.target).data("idbook"));
			Backbone.history.navigate("/detail/"+$(event.target).data("idbook")+"/",true);
		},
		deleteBook : function(event){
			console.log('ListBooksView - deleteBook');
			if (confirm('Are you sure to hide')) {
				var idBook = $(event.target).data("idbook");
				console.log('idBook: '+idBook);
				var ltBooks = new BookCollection();
		    	ltBooks.reset(JSON.parse(sessionStorage.getItem("findBooks")));
				var book = _.find(ltBooks.models,function(i) {return i.attributes.id==idBook;});
				console.log('vamos a destruir');
				book.destroy();
				console.log('destruido');
				this.render();
	        }
		}
	});
	return HomeView;
});