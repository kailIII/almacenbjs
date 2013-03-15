define([ "Backbone", "BookModel" ], function(Backbone, BookModel) {

	var BookCollection = Backbone.Collection.extend({
		model : BookModel,
		url : function() {
			 return 'http://localhost:8080/AlmacenServiceRest/service/books';
//			return 'resources/data/books.json';
		},
		parse : function(response) {
			console.log('BookCollection - parse');
			return response;
		}
	});
	return BookCollection;
});