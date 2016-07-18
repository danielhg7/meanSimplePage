angular.module('NerdCtrl', []).controller('NerdController', function($scope, Nerd) {

    $scope.tagline = 'Nothing beats a pocket protector!';

    Nerd.get(function(data) {
		$scope.nerds = data;
		console.log($scope.nerds);
	});

    //$scope.service = $nerdService;
    //$nerdService.get()
});