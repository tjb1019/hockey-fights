'use strict';

/**
 * @ngdoc service
 * @name hockeyFightsApp.videoData
 * @description
 * # videoData
 * Factory in the hockeyFightsApp.
 */
angular.module('hockeyFightsApp')
  .factory('videoData', function () {
    // Service logic
    // ...

    // Public API here
    return {
      firstGuy: '',
      secondGuy: '',
      videoHTML: ''
    };
  });
