angular.module('RegisterService', []).factory('Register', function($http, toastr) {

    return {
        registerUser:function(credentials){
    		console.log(credentials)
            $http.post('/register', {data:credentials})
            .success( function(response){
            	toastr.success(response.message);
            });
        }
    }
});
