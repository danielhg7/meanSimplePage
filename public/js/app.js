angular.module('apreakApp', ['ngResource', 'ngRoute', 'ngAnimate', 'toastr', 'ui.router', 'appRoutes', 'AuthCtrl', 'NerdCtrl', 'RegisterCtrl', 'NerdService', 'AuthService', 'RegisterService'])
	

	.config(function ($stateProvider, toastrConfig) {
		angular.extend(toastrConfig, {
  			positionClass: 'toast-bottom-right'
  		});
  	

	  	$stateProvider
    		.state('anon', {
    			abstract: true,
        		template: '<div ui-view/>',
        		data: {
		            access: 'anon'
		        }
    		})

			.state('anon.signin', {
				url: '/',
				templateUrl: 'public/views/signin.html',
				controller: 'AuthCtrl'
			})

			.state('anon.register', {
				url: '/register',
				templateUrl: 'public/views/register.html',
				controller: 'RegisterCtrl'
			})

	});