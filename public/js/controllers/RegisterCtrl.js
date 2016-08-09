angular.module('RegisterCtrl', []).controller('RegisterController', function($scope, Register) {

	$scope.register = function() {
    	Register.registerUser($scope.user);
    }
});