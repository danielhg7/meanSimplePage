angular.module('apreakApp', ['ngResource', 'ngRoute', 'ngAnimate', 'toastr', 'appRoutes', 'AuthCtrl', 'MainCtrl', 'NerdCtrl', 'RegisterCtrl', 'NerdService', 'AuthService', 'RegisterService'])
	

	.config(function (toastrConfig) {
		angular.extend(toastrConfig, {
  			positionClass: 'toast-bottom-right'
  		});
  	});