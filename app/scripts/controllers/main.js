'use strict';

/**
 * @ngdoc function
 * @name hockeyFightsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hockeyFightsApp
 */
angular.module('hockeyFightsApp')
  .controller('MainCtrl', function ($scope, sinBin, videoData, MATCHUPS, $sce, $location) {
    // Declare variables
    var playerMatchups = MATCHUPS;
    $scope.userGuess;

    // Pick a matchup for this round and make player names/images available in scope
    var thisRound = playerMatchups[Math.floor(Math.random() * playerMatchups.length)];
    $scope.firstGuyName = thisRound.player1.name;
    $scope.firstGuyImg = thisRound.player1.img;
    $scope.secondGuyName = thisRound.player2.name;
    $scope.secondGuyImg = thisRound.player2.img;

    // Make API call now while user is making a selection
    var hipCheck = sinBin.query({keywords: $scope.firstGuyName + '+' + $scope.secondGuyName});
    hipCheck.$promise.then(function(data) {
        var videoId = data.items[0].id.videoId;
        var thisVideo = '<iframe width="420" height="315" src="http://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen class="center-block"></iframe>';
        videoData.videoHTML = thisVideo;
    });

    // Update videoData so that new video can be loaded into gametime view
    videoData.firstGuy = $scope.firstGuyName;
    videoData.secondGuy = $scope.secondGuyName;

    $scope.saveUserGuess = function(guess) {
        $scope.userGuess = guess;
    };

    $scope.playVideo = function() {
        $location.path('/gametime');
    };
  });
