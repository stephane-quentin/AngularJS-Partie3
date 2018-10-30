var testApp = angular.module('app',[]);

testApp.controller('testCtrl', function($scope){
  $scope.numberTest = Math.round((Math.PI)*100)/100;
});
