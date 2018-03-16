var app = angular.module('loanApp', []);
app.controller('loanCtrl',['$scope', function($scope) {

	$scope.i = 0;//tab number

	$scope.nextTxt = "Pradėti";//'next' button text
	$scope.$watch('i', function() {
		if($scope.i >= 1 && $scope.i<loanForm.childElementCount-3)$scope.nextTxt = "Pirmyn";
		else if($scope.i==loanForm.childElementCount-3)$scope.nextTxt = "Rezultatai";
	});
	
	$scope.nextTab = function() {//for showing empty input field error when the button is pressed
	if($scope.loanForm.$$controls[$scope.i].$valid){
		$scope.i=$scope.i+1;
		$scope.submitted=false;
	}
	else $scope.submitted=true;
	}
}]);

function isNumberKey(evt) {//prohibits typing letters inside number input field
	var charCode = (evt.which) ? evt.which : event.keyCode
	if (charCode > 31 && (charCode < 48 || charCode > 57)) 
		return false;
		return true;
}