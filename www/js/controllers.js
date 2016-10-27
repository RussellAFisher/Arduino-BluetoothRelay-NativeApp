angular.module('starter.controllers', [])

.controller('ToggleCtrl', function($scope) {
  $scope.photoresistorStatus = {
    value: true
  };

  $scope.toggleMode = {
    checked: true
  };

  $scope.toggleModeFunc = function() {
    if ($scope.photoresistorStatus.value === true) {
      $scope.photoresistorStatus.value = false;
    }
    console.log(); //Put functionality that sends signal
  };

  $scope.photoresistorStatus = function() {
    if ($scope.photoresistorStatus.value === false) {
      $scope.photoresistorStatus.value = true;
      console.log(); //Put functionality that sends signal
    }
  }

})

.controller('OverrideCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
});
