'use strict';

var labWeather = ['$q', '$resource', '$http',
  function($q, $resource, $http) {

  return {

    getCurrentWeather: function() {
      var meteo = $http.get('http://meteorestsrvmobile.lab3il.fr/RestServiceMeteo.svc/json/1');
      return meteo;
    },
    getCurrentPression: function(){
      var pression = $http.get('http://meteorestsrvmobile.lab3il.fr/RestServiceMeteo.svc/json/2');
      return pression;
    },
    getCurrentHumide: function(){
      var humide = $http.get('http://meteorestsrvmobile.lab3il.fr/RestServiceMeteo.svc/json/3');
      return humide;
    },
    getCurrentVent: function(){
      var vent = $http.get('http://meteorestsrvmobile.lab3il.fr/RestServiceMeteo.svc/json/4');
      return vent;
    },
    getCurrentDirectionVent: function(){
      var directionVent = $http.get('http://meteorestsrvmobile.lab3il.fr/RestServiceMeteo.svc/json/5');
      return directionVent;
    },
    getCurrentDirectionVentLettre: function(){
      var directionVentLettre = $http.get('http://meteorestsrvmobile.lab3il.fr/RestServiceMeteo.svc/json/6');
      return directionVentLettre;
    },
    getCurrentPrecipitations: function(){
      var precipitations = $http.get('http://meteorestsrvmobile.lab3il.fr/RestServiceMeteo.svc/json/7');
      return precipitations;
    },
    getCurrentRessentie: function(){
      var ressentie = $http.get('http://meteorestsrvmobile.lab3il.fr/RestServiceMeteo.svc/json/8');
      return ressentie;
    },
    getCurrentHeureReleve: function(){
      var heureReleve = $http.get('http://meteorestsrvmobile.lab3il.fr/RestServiceMeteo.svc/json/0');
      return heureReleve;
    }

  }
}];

angular.module('starter.services', ['ngResource']).factory('Weather', labWeather);
