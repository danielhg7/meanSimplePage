angular.module('AuthCtrl', []).controller('AuthController', function($scope, Auth) {

    $scope.tagline = 'Nothing beats a pocket protector!';
    
    $scope.signIn = function() {
    	Auth.login($scope.user);
    	//console.log("que beta");
    }

});