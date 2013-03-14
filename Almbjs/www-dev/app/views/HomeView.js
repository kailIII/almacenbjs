define(["underscore", "Backbone","jquery", "text!templates/homeTemplate.html"],
		function(_, Backbone, $, homeTemplate){
	var HomeView = Backbone.View.extend({
		el: $("#content"),
		template: _.template(homeTemplate),
		events: {
			"click #goToBooks" : "goToBooks"
		},
		initialize: function(){
			console.log('HomeView - Initialize');
	      this.$el.html(this.template);
	    },
	    goToBooks: function(){
	    	console.log('HomeView - goToBooks');
	    	Backbone.history.navigate('listBooks', true); 
	    }
	});
	return HomeView;
});