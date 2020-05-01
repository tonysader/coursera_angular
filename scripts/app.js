(function () {
    'use strict'
    angular.module("LunchCheck",[])
    .controller("checkController",checkController);
    checkController.$inject = ['$scope'];

    function checkController($scope){
      $scope.placeholderTxt = "list comma separated dishes you usually have for lunch";
      $scope.dishes = "";
      $scope.message = "";
      $scope.checkDiches = function(){
        if($scope.dishes == ""){
          $scope.message = "Please enter data first";
        }else{
          let ar = $scope.dishes.split(",");
          ar = ar.filter(ele => ele != "" && ele != " ");
          $scope.message = (ar.length <=3 && ar.length >0) ? "Enjoy!":"Too much!";
        }
      }

    };

})();
