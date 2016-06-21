angular.module('NerdService', []).factory('Nerd', ['$http', '$resource', function($http, $resource) {

    return $resource('/api/nerds/:id', null,
    {
        'get': { method:'GET'},
        'save': { method:'POST'},
        'query': {method:'GET', isArray:true},
        'update':{ method:'PUT'},
        'delete':{ method:'DELETE'}
        // call to get all nerds
        /*get : function() {
            console.log("Entro en el Servicio");
            return $http.get('/api/nerds');
        },*/


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        /*create : function(nerdData) {
            return $http.post('/api/nerds', nerdData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/nerds/' + id);
        }*/
    });     

}]);