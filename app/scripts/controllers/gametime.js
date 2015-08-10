'use strict';

/**
 * @ngdoc function
 * @name hockeyFightsApp.controller:GametimeCtrl
 * @description
 * # GametimeCtrl
 * Controller of the hockeyFightsApp
 */
angular.module('hockeyFightsApp')
  .controller('GametimeCtrl', function ($scope, sinBin, videoData, $sce, $location) {
  	var hipCheck = sinBin.query({keywords: videoData.firstGuy + videoData.secondGuy});
  	hipCheck.$promise.then(function(data) {
  		var videoId = data.items[0].id.videoId;
  		var thisVideo = '<iframe width="420" height="315" src="http://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>';
  		$scope.iframeCode = $sce.trustAsHtml(thisVideo);
  	});
	    
  });
