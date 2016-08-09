angular.module('apreakApp', ['ngResource', 'ngRoute', 'ngAnimate', 'toastr', 'ui.router', 'AuthCtrl', 'RegisterCtrl', 'CoursesCtrl', 'AuthService', 'RegisterService'])
	

	.config(function ($stateProvider, toastrConfig, $routeProvider, $locationProvider) {
		angular.extend(toastrConfig, {
  			positionClass: 'toast-bottom-right'
  		});
  		
  		$routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/form.html',
            controller: 'AuthController'
        })

        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegisterController'
        })

        .when('/courses', {
            templateUrl: 'views/courses.html',
            controller: 'CoursesController'
        })

        .otherwise({ redirectTo: '/'});

    	$locationProvider.html5Mode(true);

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