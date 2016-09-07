angular.module('CourseCtrl', []).controller('CourseController', function($scope, Course, toastr, $state, courses) {

	$scope.course={
		levels: [],
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
            $state.go('anon.course');
		});
	}

	$scope.showCourse = function(courseName) {
		console.log(courseName);
		Course.get({id:courseName}, function(data) {
			$scope.course.levels=data;
			console.log($scope.course.levels);
			toastr.success(data.message);
            $state.go('anon.course');
		});
	}

});