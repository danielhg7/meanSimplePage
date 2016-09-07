angular.module('LevelService', []).factory('Level', ['$resource', function($resource) {

    

    return $resource('/api/levels/:id', {id:"@_id"}, {

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