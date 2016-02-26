angular.module('starter.controllers', [])
.controller('HomeCtrl', function($scope) {

})

.controller('WeatherCtrl', function($scope, $state, $ionicPopup, Weather) {


  Weather.getCurrentWeather().then(function(resp){
    console.log(resp.data.JSONDataTmpsResult);
    $scope.currentWeather = resp.data.JSONDataTmpsResult;
  }, function(error){
    //alert('Impossible de récupérer....');
    console.error('error');
  });


  $scope.doRefresh = function() {
    Weather.getCurrentWeather().then(function(resp){
      console.log(resp.data.JSONDataTmpsResult);
      $scope.currentWeather = resp.data.JSONDataTmpsResult;
    }, function(error){
      //alert('Impossible de récupérer....');
      console.error('error');
    });

    $scope.$broadcast('scroll.refreshComplete');
  };


  $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Informations supplémentaires',
     template: 'Humidité : '+$scope.currentWeather.Humidite+' % <br> '+
               'Pression de l\'aire : '+$scope.currentWeather.Pression+' hPa'
   });
  };

})

.controller('PrevCtrl', function($scope, $state, $ionicPopup, Weather) {
  Weather.getPrevWeather().then(function(resp){
    console.log(resp.data);
    $scope.prevWeather = resp.data.JSonDataPrevResult;
    $scope.AMIcon = "ion-pizza";
    $scope.PMIcon = "ion-pizza";
    if (resp.data.JSonDataPrevResult != undefined){
      switch(resp.data.JSonDataPrevResult.PrevisionAM) {
      case "N":
          $scope.AMIcon = "ion-ios-partlysunny";
          break;
      case "B":
          $scope.AMIcon = "ion-ios-sunny";
          break;
      case "Pe":
          $scope.AMIcon = "ion-ios-cloudy";
          break;
      case "Pl":
          $scope.AMIcon = "ion-ios-rainy";
          break;
      case "Ne":
          $scope.AMIcon = "ion-ios-snowy";
          break;
      case "O":
          $scope.AMIcon = "ion-ios-thunderstorm";
          break;
      case "X":
          $scope.AMIcon = "ion-pizza";
          break;
      }

      switch($scope.prevWeather.PrevisionPM) {
      case "N":
          $scope.PMIcon = "ion-ios-partlysunny";
          break;
      case "B":
          $scope.PMIcon = "ion-ios-sunny";
          break;
      case "Pe":
          $scope.PMIcon = "ion-ios-cloudy";
          break;
      case "Pl":
          $scope.PMIcon = "ion-ios-rainy";
          break;
      case "Ne":
          $scope.PMIcon = "ion-ios-snowy";
          break;
      case "O":
          $scope.PMIcon = "ion-ios-thunderstorm";
          break;
      case "X":
          $scope.PMIcon = "ion-pizza";
          break;
      }
    }
  }, function(error){
    console.error('error');
  });

  $scope.doRefresh = function() {
    Weather.getPrevWeather().then(function(resp){
      console.log(resp.data);
      $scope.prevWeather = resp.data.JSonDataPrevResult;
      $scope.AMIcon = "ion-pizza";
      $scope.PMIcon = "ion-pizza";
      if (resp.data.JSonDataPrevResult != undefined){
        switch(resp.data.JSonDataPrevResult.PrevisionAM) {
        case "N":
            $scope.AMIcon = "ion-ios-partlysunny";
            break;
        case "B":
            $scope.AMIcon = "ion-ios-sunny";
            break;
        case "Pe":
            $scope.AMIcon = "ion-ios-cloudy";
            break;
        case "Pl":
            $scope.AMIcon = "ion-ios-rainy";
            break;
        case "Ne":
            $scope.AMIcon = "ion-ios-snowy";
            break;
        case "O":
            $scope.AMIcon = "ion-ios-thunderstorm";
            break;
        case "X":
            $scope.AMIcon = "ion-pizza";
            break;
        }

        switch($scope.prevWeather.PrevisionPM) {
        case "N":
            $scope.PMIcon = "ion-ios-partlysunny";
            break;
        case "B":
            $scope.PMIcon = "ion-ios-sunny";
            break;
        case "Pe":
            $scope.PMIcon = "ion-ios-cloudy";
            break;
        case "Pl":
            $scope.PMIcon = "ion-ios-rainy";
            break;
        case "Ne":
            $scope.PMIcon = "ion-ios-snowy";
            break;
        case "O":
            $scope.PMIcon = "ion-ios-thunderstorm";
            break;
        case "X":
            $scope.PMIcon = "ion-pizza";
            break;
        }
      }
    }, function(error){
      console.error('error');
    });


    $scope.$broadcast('scroll.refreshComplete');
  };
});

function adaptTemp(temp){
  var tempAdapt = temp.toString().split("")
  var tempFinal = tempAdapt[0];
  if(tempAdapt[2] > 5){
    tempFinal++;
  }
  return tempFinal;
}
