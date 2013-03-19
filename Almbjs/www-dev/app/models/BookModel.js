define(["Backbone"], function(Backbone){
    var BookModel = Backbone.Model.extend({
    	parse: function(item) {
            return {
            	//id se tiene que llamar ID
                id: item.id,
                nombre: item.nombre,
                autor: item.autor,
                argumento: item.argumento,
                paginas: item.paginas
            };
        }
    });
    return BookModel;
});