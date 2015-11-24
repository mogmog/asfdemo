'use strict';

angular.module('myApp.view1', ['ngRoute', 'schemaForm'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
      });
    }])

    .controller('View1Ctrl', ['$scope', function($scope) {


      $scope.schema = {
        type: "object",
        properties: {
          name: { type: "string", minLength: 2, title: "Name"}

        }
      };

      $scope.form = [

        {
          type: "fieldset",
          title: 'The Title',
          items: [

            {
              key: 'name',
              htmlClass: 'block',
              type: 'text',
            },



          ]
        }
      ];

      $scope.model = {name : 'test in fieldset'};



    }]);