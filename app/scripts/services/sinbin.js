'use strict';

/**
 * @ngdoc service
 * @name hockeyFightsApp.sinBin
 * @description
 * # sinBin
 * Factory in the hockeyFightsApp.
 */
angular.module('hockeyFightsApp')
  .factory('sinBin', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('https://www.googleapis.com/youtube/v3/search?part=snippet&q=:keywords&type=video&key=AIzaSyADdXtRZ0COj-iZ9CUxkHwsNjFa4YRoiIk', {}, {
      query: {
        method: 'GET',
        params: {
          keywords: 'hockey+fight'
        },
        isArray: false
      }
    });
  });
