angular.module('RegisterService', []).factory('Register', function($http, $state, toastr) {

    return {
        registerUser:function(credentials){
            $http.post('/register', {data:credentials})
            .success( function(response){
            	toastr.success(response.message);
            	$state.go('anon.signin');
            });
        }
    }
});
