angular.module('RegisterCtrl', []).controller('RegisterController', function($scope, Register) {

	$scope.register = function() {
    	console.log($scope.user);
    	Register.registerUser($scope.user);
    	//console.log("que beta");
    }
});