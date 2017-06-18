angular.module('quotesService', [])

.factory('rentQuote', function($http) {

    return {
//        // get all the quotes
//        get : function() {
//            return $http.get('/quote');
//        },

        // save a quote (pass in quote data)
        save : function(data) {

            return $http({
                method: 'POST',
                url: '/quote',
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(data)
            });
        },

        // destroy a quote
        destroy : function(id) {
            return $http.delete('/quote' + id);
        }
    }

});