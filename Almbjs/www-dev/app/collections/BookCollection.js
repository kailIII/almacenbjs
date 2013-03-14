define([ "Backbone", "BookModel" ], function(Backbone, BookModel) {

	var BookCollection = Backbone.Collection.extend({
		model : BookModel,
		url : function() {
			// return 'http://www.lapartequefalta.org/vnk/api/wines';
			return 'resources/data/books.json';
		},
		parse : function(response) {
			console.log('BookCollection - parse');
			return response.books;
		}
	});
	return BookCollection;
});