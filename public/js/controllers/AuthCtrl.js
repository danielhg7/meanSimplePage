angular.module('AuthCtrl', []).controller('AuthController', function($scope, Auth) {

    $scope.tagline = 'Nothing beats a pocket protector!';
    
    $scope.signIn = function() {
    	console.log($scope.user);
    	Auth.login($scope.user);
    	//console.log("que beta");
    }

});