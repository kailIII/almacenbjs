requirejs.config({
    baseUrl: "app/",
    paths: {
        "jquery": "../vendor/jquery/jquery-1.9.1",
        "router": "router",
        "text": "../vendor/require/text",
        "underscore": "../vendor/underscore/underscore",
        "Backbone": "../vendor/backbone/backbone",
        //Models
        "BookModel" : "models/BookModel",
        //Collections
        "BookCollection" : "collections/BookCollection",
        "BookCollectionRest" : "collections/BookCollectionRest",
        //Views
        "AddBookView" : "views/AddBookView",
        "HomeView" : "views/HomeView",
        "ListBooksView" : "views/ListBooksView"
    },
    shim: {
    	Backbone: {
          deps: ["underscore", "jquery"],
          exports: "Backbone",
          init: function(_, $) {
            return this.Backbone.noConflict();
          }
        },
        underscore: {
          exports: "_",
          init: function() {
            return this._.noConflict();
          }
        },
        jquery: {
          exports: "$",
          init: function() {
            return this.jQuery.noConflict();
          }
        }
    }
});

require(["router", "Backbone"], function(Router, Backbone){
	console.log("Main");
	new Router();
	Backbone.history.start();
});