angular.module("calculator", []).controller('CalculatorController', ['$scope',
function($scope) {
  $scope.result = 0;
  $scope.one = 1;
  $scope.two = 2;
  $scope.varOrderingArray = [];
  $scope.firstNum;
  $scope.secondNum;
  $scope.thirdNum;
  $scope.operatorChosen = false;
$scope.choseOperator = function(operator) {
  $scope.chosenOperation = operator;
  $scope.operatorChosen = true;
  $scope.varOrderingArray = [];
}

$scope.assignVar = function(variable) {
//get chosen number to show up on calculator screen
  $scope.result = variable;
  $scope.varOrderingArray.push(variable);
  //Operator has NOT been chosen. Set firstNum if firstNum is more than one digit in length
  if (!$scope.operatorChosen && $scope.varOrderingArray.length >= 2) {
    $scope.result = $scope.varOrderingArray.join("");
    $scope.firstNum = parseInt($scope.varOrderingArray.join(""));
    console.log('firstNum from line 29 = ', $scope.firstNum);
  }
  //Operator has NOT been chosen. Set firstNum if firstNum is more than one digit in length
  else if (!$scope.operatorChosen && $scope.varOrderingArray.length == 1) {
    $scope.firstNum = variable;
  }
  //Operator has been chosen. Set SecondNum if SecondNum > 2
  if ($scope.operatorChosen && $scope.varOrderingArray.length >= 2) {
    $scope.result = $scope.varOrderingArray.join("");
    $scope.secondNum = parseInt($scope.varOrderingArray.join(""));
    //though these need to be saved as firstNum and secondNum and not result!
    console.log('secondNum from line 29 = ', $scope.secondNum);
  }
  //Operator has been chosen. Set SecondNum if SecondNum is one digit in length
  else if ($scope.operatorChosen && $scope.varOrderingArray.length == 1) {
    $scope.secondNum = variable;
  }

}

$scope.calculate = function() {
  console.log($scope.firstNum, $scope.secondNum);
  console.log($scope.chosenOperation);

  switch ($scope.chosenOperation) {
    case 'add':
        $scope.result = $scope.firstNum + $scope.secondNum;
        console.log("result form 46 = ", $scope.result);
        break;
    case 'subtract':
        $scope.result = $scope.firstNum - $scope.secondNum;
        console.log("result form 46 = ", $scope.result);
        break;
    case 'multiply':
        $scope.result = $scope.firstNum * $scope.secondNum;
        console.log("result form 46 = ", $scope.result);
        break;
    case 'divide':
        $scope.result = $scope.firstNum / $scope.secondNum;
        console.log("result form 46 = ", $scope.result);
        break;
  }
  $scope.varOrderingArray = []; 
}

$scope.clearOrderingArr = function() {
  $scope.varOrderingArray = [];
  $scope.result = 0;
}

}]);
