angular.module('RegisterService', []).factory('Register', function($http, $state, $window, toastr) {

    return {
        registerUser:function(credentials){
            $http.post('/register', {data:credentials})
            .success( function(response){
            	console.log($window.localStorage.token);
            	toastr.success(response.message);
            	$state.go('anon.signin');
            });
        }
    }
});
