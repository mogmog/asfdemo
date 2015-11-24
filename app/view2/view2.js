'use strict';

angular.module('myApp.view2', ['ngRoute', 'schemaForm'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
      });
    }])

    .controller('View2Ctrl', ['$scope', function($scope) {


      $scope.schema = {
        type: "object",
        properties: {
          name: { type: "string", minLength: 2, title: "Name"}

        }
      };

      $scope.form = [

            {
              key: 'name',
              htmlClass: 'block',
              type: 'text',
            }

      ];

      $scope.model = {name : 'test no fieldset'};



    }]);