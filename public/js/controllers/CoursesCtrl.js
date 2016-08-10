angular.module('CoursesCtrl', []).controller('CoursesController', function($scope, Course) {

	$scope.course={};

	$scope.createCourse = function() {
		Course.create($scope.course, function(data) {
		});
	}

});