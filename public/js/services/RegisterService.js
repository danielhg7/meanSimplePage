angular.module('RegisterService', []).factory('Register', ['$http', function($http) {

    return {
        registerUser:function(credentials){
    		console.log(credentials)
            $http.post('/register', {data:credentials})
        }
    }
}]);
