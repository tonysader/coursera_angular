'use strict';
angular.module("myApp",[])
.controller("myController",['$scope','$filter',myController]);
function myController($scope,$filter){
  $scope.name = "tony";

  $scope.upper = function(){
    var upCase = $filter("uppercase");
    console.log("Sssssssss");
    $scope.name = upCase($scope.name);
    $scope.last = upCase($scope.last);
  };
}
