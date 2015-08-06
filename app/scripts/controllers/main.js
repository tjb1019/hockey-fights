'use strict';

/**
 * @ngdoc function
 * @name hockeyFightsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hockeyFightsApp
 */
angular.module('hockeyFightsApp')
  .controller('MainCtrl', function ($scope, sinBin, $sce) {
    $scope.test = sinBin.query();
    $scope.test.$promise.then(function(data) {
    	var videoId = data.items[0].id.videoId;
    	var thisVideo = '<iframe width="420" height="315" src="http://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>';
    	$scope.iframeCode = $sce.trustAsHtml(thisVideo);
    });
    $scope.refreshVideo = function() {
    	$scope.test = sinBin.query({ keywords: $scope.searchText });
    	$scope.test.$promise.then(function(data) {
    		var videoId = data.items[0].id.videoId;
    		var thisVideo = '<iframe width="420" height="315" src="http://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>';
    		$scope.iframeCode = $sce.trustAsHtml(thisVideo);
    	});
    };
  });
