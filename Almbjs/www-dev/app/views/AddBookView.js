define(["underscore", "Backbone","jquery", "text!templates/addBookTemplate.html"],
		function(_, Backbone, $, addBookTemplate){
	var AddBookView = Backbone.View.extend({
		el: $("#content"),
		template: _.template(addBookTemplate),
		events: {
			"click #saveBook" : "saveBook"
		},
		initialize: function(){
			console.log('AddBookView - Initialize');
			this.$el.html(this.template);
	    },
	    saveBook: function(){
	    	console.log('AddBookView - saveBook');
	    }
	});
	return AddBookView;
});