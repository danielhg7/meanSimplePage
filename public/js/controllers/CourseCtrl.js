angular.module('CourseCtrl', []).controller('CourseController', function($scope, Course, toastr, $state) {

	$scope.course={
		name: "",
		numberOfLevels: 0,
		creationDate: new Date()
	};

	$scope.courses=[];

	console.log("Por aqui vamos bien");

	$scope.courses=Course.query(function(data) {

    	if(data) {
      		$scope.courses=data.courses;
        	console.log(data);
        	$state.go('anon.course');
    	}

    });

	$scope.createCourse = function() {
		$scope.course.creationDate = new Date();
		console.log($scope.course);
		Course.create($scope.course, function(data) {
			toastr.success(data.message);
            $state.go('anon.signin');
		});
	}

});