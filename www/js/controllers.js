angular.module('starter.controllers', [])
.controller('HomeCtrl', function($scope) {

})

.controller('WeatherCtrl', function($scope, $state, Weather) {
  console.log('Accueil');
  $scope.city = "Limoges";


  Weather.getCurrentWeather().then(function(resp){
    console.log(resp);
    $scope.current = resp.data;
    console.log('Courant', $scope.current);
  }, function(error){
    //alert('Impossible de récupérer....');
    console.error('error');
  });
  Weather.getCurrentPression().then(function(resp){
    console.log(resp);
    $scope.pression = resp.data;
    console.log('Courant', $scope.pression);
  }, function(error){
    //alert('Impossible de récupérer....');
    console.error('error');
  });
  Weather.getCurrentHumide().then(function(resp){
    console.log(resp);
    $scope.humide = resp.data;
    console.log('Courant', $scope.humide);
  }, function(error){
    //alert('Impossible de récupérer....');
    console.error('error');
  });
  Weather.getCurrentVent().then(function(resp){
    console.log(resp);
    $scope.vent = resp.data;
    console.log('Courant', $scope.vent);
  }, function(error){
    //alert('Impossible de récupérer....');
    console.error('error');
  });
  Weather.getCurrentDirectionVent().then(function(resp){
    console.log(resp);
    $scope.directionVent = resp.data;
    console.log('Courant', $scope.directionVent);
  }, function(error){
    //alert('Impossible de récupérer....');
    console.error('error');
  });
  Weather.getCurrentDirectionVentLettre().then(function(resp){
    console.log(resp);
    $scope.directionVentLettre = resp.data;
    console.log('Courant', $scope.directionVentLettre);
  }, function(error){
    //alert('Impossible de récupérer....');
    console.error('error');
  });
  Weather.getCurrentPrecipitations().then(function(resp){
    console.log(resp);
    $scope.precipitations = resp.data;
    console.log('Courant', $scope.precipitations);
  }, function(error){
    //alert('Impossible de récupérer....');
    console.error('error');
  });
  Weather.getCurrentRessentie().then(function(resp){
    console.log(resp);
    $scope.ressentie = resp.data;
    console.log('Courant', $scope.ressentie);
  }, function(error){
    //alert('Impossible de récupérer....');
    console.error('error');
  });
})

.controller('SettingsCtrl', function($scope) {

});
