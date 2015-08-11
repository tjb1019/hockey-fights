'use strict';

/**
 * @ngdoc function
 * @name hockeyFightsApp.controller:GametimeCtrl
 * @description
 * # GametimeCtrl
 * Controller of the hockeyFightsApp
 */
angular.module('hockeyFightsApp')
  .controller('GametimeCtrl', function ($scope, videoData, $sce) {
  	
  		$scope.iframeCode = $sce.trustAsHtml(videoData.videoHTML);
	    
  });
