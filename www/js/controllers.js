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

  Weather.getPrevWeather().then(function(resp){
    $scope.prevWeather = resp.data.JSONDataPrevResult;
    console.log(resp.data.JSONDataPrevResult);
    if (resp.data.JSONDataPrevResult != undefined){
      $scope.AMIcon = setIconPrev($scope.prevWeather.PrevisionAM);
      $scope.PMIcon = setIconPrev($scope.prevWeather.PrevisionPM);
    }
    else{
      console.error('FAIIIIIL');
    }
  }, function(error){
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

    Weather.getPrevWeather().then(function(resp){
      $scope.prevWeather = resp.data.JSONDataPrevResult;
      console.log(resp.data.JSONDataPrevResult);
      if (resp.data.JSONDataPrevResult != undefined){
        $scope.AMIcon = setIconPrev($scope.prevWeather.PrevisionAM);
        $scope.PMIcon = setIconPrev($scope.prevWeather.PrevisionPM);
      }
      else{
        console.error('FAIIIIIL');
      }
    }, function(error){
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
    $scope.prevWeather = resp.data.JSONDataPrevResult;
    console.log(resp.data.JSONDataPrevResult);
    if (resp.data.JSONDataPrevResult != undefined){
      $scope.AMIcon = setIconPrev($scope.prevWeather.PrevisionAM);

      $scope.PMIcon = setIconPrev($scope.prevWeather.PrevisionPM);
    }
    else{
      console.error('FAIIIIIL');
    }
  }, function(error){
    console.error('error');
  });

  $scope.doRefresh = function() {
    Weather.getPrevWeather().then(function(resp){
      console.log(resp.data);
      $scope.prevWeather = resp.data.JSONDataPrevResult;
      $scope.AMIcon = "ion-pizza";
      $scope.PMIcon = "ion-pizza";
      if (resp.data.JSONDataPrevResult != undefined){
        $scope.AMIcon = setIconPrev($scope.prevWeather.PrevisionAM);

        $scope.PMIcon = setIconPrev($scope.prevWeather.PrevisionPM);
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

function setIconPrev(value){
  switch(value) {
  case "N":
      return "ion-ios-partlysunny";
      break;
  case "B":
      return "ion-ios-sunny";
      break;
  case "Pe":
      return "ion-ios-cloudy";
      break;
  case "Pl":
      return "ion-ios-rainy";
      break;
  case "Ne":
      return "ion-ios-snowy";
      break;
  case "O":
      return "ion-ios-thunderstorm";
      break;
  case "X":
      return "ion-pizza";
      break;
  }
}
