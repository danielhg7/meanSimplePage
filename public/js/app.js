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
            controller: 'CourseController',
            resolve: {

				courses: function(Course, $window){
					console.log("Por aqui 1,2,3");
					return Course.query().$promise.then(function(data){
						console.log("Va viento en popa");
						return data;
					});
				}
			}
        })

        .when('/courses/create', {
            templateUrl: 'views/courses/create.html',
            controller: 'CourseController',
            resolve: {

				courses: function(Course, $window){
					console.log("Por aqui 1,2,3");
					return Course.query().$promise.then(function(data){
						console.log("Va viento en popa");
						return data;
					});
				}
			}
        })

        .when('/courses/show', {
            templateUrl: 'views/courses/show.html',
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

			.state('anon.course', {
				url: '/course',
				templateUrl: 'public/views/courses.html',
				controller: 'CourseCtrl'
			})

			.state('anon.course.show', {
				url: '/course/show',
				templateUrl: 'public/views/courses/show.html',
				controller: 'CourseCtrl'
			})


	});