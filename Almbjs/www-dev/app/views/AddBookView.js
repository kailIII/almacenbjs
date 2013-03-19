define([ "underscore", "Backbone", "jquery", "BookModel", "BookCollectionRest",
		"text!templates/addBookTemplate.html" ], function(_, Backbone, $,
		BookModel, BookCollection, addBookTemplate) {
	var AddBookView = Backbone.View.extend({
		el : $("#content"),
		template : _.template(addBookTemplate),
		events : {
			"click #saveBook" : "saveBook"
		},
		initialize : function() {
			console.log('AddBookView - Initialize');
			this.$el.html(this.template);
		},
		saveBook : function() {
			console.log('AddBookView - saveBook');
			var collection = new BookCollection();
			var book = new BookModel();
			var atributos = {
					nombre : $("#nombre").val(),
					autor : $("#argumento").val(),
					argumento : $("#autor").val(),
					paginas : $("#paginas").val()
			};

			console.log('name '+book.attributes.nombre);
			console.log('Vamos a anyadir');
			collection.add(book);
			console.log('Vamos a guardar');
			book.save(atributos, {success :function(model, response){
	        	console.log("success");
	        }, error: function(model, response){
	        	console.log("error");
	        	console.log("model "+JSON.stringify(model));
	        	console.log("response "+JSON.stringify(response));
	        }});
			console.log('hemos guardado y volvemos atras');
			history.back();
		}
	});
	return AddBookView;
});