angular.module('CourseService', []).factory('Course', ['$resource', function($resource) {

    

    return $resource('/courses/:id', {id:"@_id"}, {

        query:{
            method:'GET',
            isArray: true
        },

        get:{
          method: 'GET',
          params: {id: '@id'}
        },

        update:{
          method: 'PUT',
          params: {id: '@id'}
        },

        create:{
          method: 'POST'
        }

    });

}]);