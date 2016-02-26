'use strict';

var labWeather = ['$q', '$resource', '$http',
  function($q, $resource, $http) {

  return {

    getCurrentWeather: function() {
      var meteo = $http.get('http://meteorestsrvmobile.lab3il.fr/RestServiceMeteo.svc/jsontmps');
      return meteo;
    },

    getPrevWeather: function(){
      var prev = $http.get('http://meteorestsrvmobile.lab3il.fr/RestServiceMeteo.svc/jsonprev');
      return prev;
    }

  }
}];

angular.module('starter.services', ['ngResource']).factory('Weather', labWeather);
