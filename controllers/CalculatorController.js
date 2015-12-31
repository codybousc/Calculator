angular.module("calculator", []).controller('CalculatorController', ['$scope',
function($scope) {
  $scope.result = 0;
  $scope.one = 1;
  $scope.two = 2;
  $scope.test = "WHAT'S HAPPPENING?";

$scope.assignVar = function() {
  console.log("making it to assignVar function")
  varOrderingArray = [];
  varOrderingArray.push(variable);
  console.log(varOrderingArray);
}

$scope.calculate = function(firstNum, secondNum) {

}



}]);
