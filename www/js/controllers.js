angular.module('starter.controllers', [])
.controller('HomeCtrl', function($scope) {

})

.controller('WeatherCtrl', function($scope, $state, $ionicPopup, Weather) {


  Weather.getCurrentWeather().then(function(resp){

    var temp = adaptTemp(resp.data.JSONDataResult);
    $scope.current = temp;
  }, function(error){
    //alert('Impossible de récupérer....');
    console.error('error');
  });
  Weather.getCurrentPression().then(function(resp){

    $scope.pression = resp.data;
    var press = resp.data.JSONDataResult;
    if (parseInt(press) >= 1020){
      $scope.weatherIcon = "sunny";
    }
    else{
      $scope.weatherIcon = "cloudy";
    }
  }, function(error){
    //alert('Impossible de récupérer....');
    console.error('error');
  });
  Weather.getCurrentHumide().then(function(resp){

    $scope.humide = resp.data;
  }, function(error){
    //alert('Impossible de récupérer....');
    console.error('error');
  });
  Weather.getCurrentVent().then(function(resp){

    $scope.vent = resp.data;
  }, function(error){
    //alert('Impossible de récupérer....');
    console.error('error');
  });
  Weather.getCurrentDirectionVent().then(function(resp){

    $scope.directionVent = resp.data;
  }, function(error){
    //alert('Impossible de récupérer....');
    console.error('error');
  });
  Weather.getCurrentDirectionVentLettre().then(function(resp){

    $scope.directionVentLettre = resp.data;
  }, function(error){
    //alert('Impossible de récupérer....');
    console.error('error');
  });
  Weather.getCurrentPrecipitations().then(function(resp){

    $scope.precipitations = resp.data;
  }, function(error){
    //alert('Impossible de récupérer....');
    console.error('error');
  });
  Weather.getCurrentRessentie().then(function(resp){

    var temp = adaptTemp(resp.data.JSONDataResult)
    $scope.ressentie = temp;
  }, function(error){
    //alert('Impossible de récupérer....');
    console.error('error');
  });

  $scope.doRefresh = function() {
    Weather.getCurrentWeather().then(function(resp){

      var temp = adaptTemp(resp.data.JSONDataResult);
      $scope.current = temp;
    }, function(error){
      //alert('Impossible de récupérer....');
      console.error('error');
    });
    Weather.getCurrentPression().then(function(resp){

      $scope.pression = resp.data;
      var press = resp.data.JSONDataResult;
      if (parseInt(press) >= 1020){
        $scope.weatherIcon = "sunny";
      }
      else{
        $scope.weatherIcon = "cloudy";
      }
    }, function(error){
      //alert('Impossible de récupérer....');
      console.error('error');
    });
    Weather.getCurrentHumide().then(function(resp){

      $scope.humide = resp.data;
    }, function(error){
      //alert('Impossible de récupérer....');
      console.error('error');
    });
    Weather.getCurrentVent().then(function(resp){

      $scope.vent = resp.data;
    }, function(error){
      //alert('Impossible de récupérer....');
      console.error('error');
    });
    Weather.getCurrentDirectionVent().then(function(resp){

      $scope.directionVent = resp.data;
    }, function(error){
      //alert('Impossible de récupérer....');
      console.error('error');
    });
    Weather.getCurrentDirectionVentLettre().then(function(resp){

      $scope.directionVentLettre = resp.data;
    }, function(error){
      //alert('Impossible de récupérer....');
      console.error('error');
    });
    Weather.getCurrentPrecipitations().then(function(resp){

      $scope.precipitations = resp.data;
    }, function(error){
      //alert('Impossible de récupérer....');
      console.error('error');
    });
    Weather.getCurrentRessentie().then(function(resp){

      var temp = adaptTemp(resp.data.JSONDataResult)
      $scope.ressentie = temp;

    }, function(error){
      //alert('Impossible de récupérer....');
      console.error('error');
    });
    $scope.$broadcast('scroll.refreshComplete');
  };
  $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Informations supplémentaires',
     template: 'Humidité : '+$scope.humide.JSONDataResult+' % <br> '+
               'Pression de l\'aire : '+$scope.pression.JSONDataResult+' hPa'
   });
 };

})

.controller('SettingsCtrl', function($scope) {

});

function adaptTemp(temp){
  var tempAdapt = temp.toString().split("")
  var tempFinal = tempAdapt[0];
  if(tempAdapt[2] > 5){
    tempFinal++;
  }
  return tempFinal;
}
