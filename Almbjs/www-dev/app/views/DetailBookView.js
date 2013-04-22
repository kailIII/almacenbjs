define([ "underscore", "Backbone", "jquery",
		"text!templates/detailBookTemplate.html", "BookCollectionRest",
		"BookModel" ], function(_, Backbone, $, detailBookTemplate,
		BookCollection, BookModel) {
	var DetailBookView = Backbone.View.extend({
		el : $("#content"),
		template : _.template(detailBookTemplate),
		events : {
			"click #btnSave" : "saveBook"
		},
		render : function() {
			console.log('DetailBookView - render - init');
			var self = this;
			var idBook = self.options.idBook;
			console.log('Id Book ' + idBook);
			var ltBooks = new BookCollection();
			ltBooks.reset(JSON.parse(sessionStorage.getItem("findBooks")));
			this.book = _.find(ltBooks.models, function(i) {
				return i.attributes.id == idBook;
			});
			console.log('book ' + this.book);
			console.log('BOOK ID INTERNAL: ' + this.book.id);
			$(self.el).html(self.template({
				book : this.book
			}));
			console.log('DetailBookView - render - end');
			return self;
		},
		saveBook : function() {
			console.log('BOOK ID INTERNAL: ' + this.book.id);

			var atributos = {
				nombre : $("#nombre").val(),
				autor : $("#autor").val(),
				argumento : $("#argumento").val(),
				paginas : $("#paginas").val()
			};

			var retorno = this.book.save(atributos, {
				success : function(model, response) {
					console.log("DetailBookView - saveBook - success");
				},
				error : function(model, response) {
					console.log("DetailBookView - saveBook - error");
					console.log("model " + JSON.stringify(model));
					console.log("response " + JSON.stringify(response));
				}
			});
			console.log('Libro guardado ' + retorno);
			history.back();
		}

	});
	return DetailBookView;
});