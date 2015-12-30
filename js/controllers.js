
// It is just like saying "get this module 'patientApp' and create a controller patientDataCtrl"

angular.module('patientApp').controller('patientDataCtrl',['$scope','$http',function($scope,$http)
{
	 $scope.patients = [];
     $scope.visitCount =0;
     $scope.loadPatientData = function(){
     	$http.get("http://www.json-generator.com/api/json/get/bPbMqmSUJe?indent=2")
     	     .success(function(response){
     	     	$scope.patients = response;
     	     	$scope.visitCount = $scope.visitCount +1;
     	     })
     	     .error(function(response){
     	     	console.log("something went wrong");
     	     });
     };

}]);