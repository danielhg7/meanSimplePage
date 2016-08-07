angular.module('AuthService', []).factory('Auth', ['$http', function($http) {

    return {
        login:function(credentials){
        		console.log(credentials)
                $http.post('/signin', {name:credentials.name, password:credentials.password})
        }
    }

}]);