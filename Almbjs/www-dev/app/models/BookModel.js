define(["Backbone"], function(Backbone){
    var BookModel = Backbone.Model.extend({
    	parse: function(item) {
    		console.log('BookModel - parse');
    		if(item != null){
    			console.log('BookModel - item not null');
    			 return {
    	            	//id se tiene que llamar ID
    	                id: item.id,
    	                nombre: item.nombre,
    	                autor: item.autor,
    	                argumento: item.argumento,
    	                paginas: item.paginas
    	            };
    		}else{
    			console.log('BookModel - item null');
    			return {};
    		}
           
        }
    });
    return BookModel;
});