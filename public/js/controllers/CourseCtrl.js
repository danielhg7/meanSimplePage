angular.module('CourseCtrl', []).controller('CourseController', function($scope, Course, toastr, $state, courses) {

	$scope.course={
		name: "",
		numberOfLevels: 0,
		creationDate: new Date()
	};

	$scope.courses=courses;

	$scope.createCourse = function() {
		$scope.course.creationDate = new Date();
		console.log($scope.course);
		Course.create($scope.course, function(data) {
			toastr.success(data.message);
            $state.go('anon.signin');
		});
	}

});