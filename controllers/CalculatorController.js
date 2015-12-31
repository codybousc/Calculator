angular.module("calculator", []).controller('CalculatorController', ['$scope',
function($scope) {
  $scope.result = 0;
  $scope.one = 1;
  $scope.two = 2;
  $scope.test = "WHAT'S HAPPPENING?";
  $scope.varOrderingArray = [];
  $scope.firstNum;
  $scope.secondNum;
  $scope.thirdNum;
$scope.choseOperator = function(operator) {
  $scope.chosenOperation = operator;
}

$scope.assignVar = function(variable) {
  //get chosen number to show up on screen
  $scope.result = variable;
  $scope.varOrderingArray.push(variable);
  for(var i = 0; i < $scope.varOrderingArray.length; i++) {
    $scope.firstNum = $scope.varOrderingArray[0];
    $scope.secondNum = $scope.varOrderingArray[1];
    $scope.thirdNum = $scope.varOrderingArray[2];
  }
}

$scope.calculate = function() {
  console.log($scope.firstNum, $scope.secondNum);
  console.log($scope.chosenOperation);

  switch ($scope.chosenOperation) {
    case 'add':
        $scope.result = $scope.firstNum + $scope.secondNum;
        break;
    case 'subtract':
        $scope.result = $scope.firstNum - $scope.secondNum;
        break;
    case 'multiply':
        $scope.result = $scope.firstNum * $scope.secondNum;
        break;
    case 'divide':
        $scope.result = $scope.firstNum / $scope.secondNum;
        break; 
  }
}

$scope.clearOrderingArr = function() {
  $scope.varOrderingArray = [];
  $scope.result = 0;
}



}]);
