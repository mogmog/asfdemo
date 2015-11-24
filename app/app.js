'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'schemaForm'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view2'});
}])


.config(['schemaFormDecoratorsProvider', function(decoratorsProvider) {

      //decorator a - read only views

  decoratorsProvider.defineDecorator('readonly', {
    'text': {template: 'directives/display/' + 'gg-text.html', replace: false},
    'fieldset': {template:'directives/display/' + 'gg-fieldset.html', replace: false}
  }, []);

//decorator b - input fields

  decoratorsProvider.defineDecorator('edit', {
    'text': {template:  'directives/form/' + 'gg-text.html', replace: false},
    'fieldset': {template:  'directives/form/' + 'gg-fieldset.html', replace: false}
  }, []);



}]);



