angular.module('apreakApp', ['ngResource', 'ngRoute', 'ngAnimate', 'toastr', 'file-model', 'ui.router', 'AuthCtrl', 'RegisterCtrl', 'CourseCtrl', 'AuthService', 'RegisterService', 'CourseService'])
	

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
            controller: 'CourseController'
        })

        .when('/courses/create', {
            templateUrl: 'views/courses/create.html',
            controller: 'CourseController'
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