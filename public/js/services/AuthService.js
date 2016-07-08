angular.module('AuthService', []).factory('Auth', ['$http', '$resource', function($http, $resource) {

    return {
        login:function(credentials){
                $http({method:'POST', url: '/signin', params:credentials})
        }
    }

}]);