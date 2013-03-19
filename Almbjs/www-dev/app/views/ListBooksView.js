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
		},
		editBook : function(event){
			console.log('ListBooksView - editBook');
//			console.log('idBook: '+$(event.target).data("idBook")); //con idBook falla
			console.log('idBook: '+$(event.target).data("idbook"));
			Backbone.history.navigate("/detail/"+$(event.target).data("idbook")+"/",true);
		},
		deleteBook : function(event){
			console.log('ListBooksView - deleteBook');
			var idBook = $(event.target).data("idbook");
			console.log('idBook: '+idBook);
			var ltBooks = new BookCollection();
	    	ltBooks.reset(JSON.parse(sessionStorage.getItem("findBooks")));
			var book = _.find(ltBooks.models,function(i) {return i.attributes.id==idBook;});
			console.log('vamos a destruir');
			book.destroy();
			console.log('destruido');
			this.render();
//			$('<div></div>').appendTo('body')
//			  .html('<div><h6>Yes or No?</h6></div>')
//			  .dialog({
//			      modal: true, title: 'message', zIndex: 10000, autoOpen: true,
//			      width: 'auto', resizable: false,
//			      buttons: {
//			          Yes: function () {
//			        	  console.log('confirm yes');
//			              $(this).dialog("close");
//			          },
//			          No: function () {
//			              console.log('confirm no');
//			              $(this).dialog("close");
//			          }
//			      },
//			      close: function (event, ui) {
//			          $(this).remove();
//			      }
//			});
		}
	});
	return HomeView;
});