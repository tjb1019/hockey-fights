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
    var playerMatchups = MATCHUPS;
    $scope.userGuess;

    // Pick a matchup for this round and make player names/images available in scope
    var thisRound = playerMatchups[Math.floor(Math.random() * playerMatchups.length)];
    $scope.firstGuyName = thisRound.player1.name;
    $scope.firstGuyImg = thisRound.player1.img;
    $scope.secondGuyName = thisRound.player2.name;
    $scope.secondGuyImg = thisRound.player2.img;

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
