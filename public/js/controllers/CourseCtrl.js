angular.module('CourseCtrl', []).controller('CourseController', function($scope, Course, toastr, $state) {

	$scope.course={};

	$scope.createCourse = function() {
		Course.create($scope.course, function(data) {
			toastr.success(data.message);
            $state.go('anon.signin');
		});
	}

});