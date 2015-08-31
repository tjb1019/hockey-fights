'use strict';

/**
 * @ngdoc function
 * @name hockeyFightsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hockeyFightsApp
 */
angular.module('hockeyFightsApp')
  .controller('MainCtrl', function ($scope, sinBin, videoData, MATCHUPS, $sce, $location, $localStorage) {

    // Pick a matchup for this round and make player names/images available in scope
    var thisRound = MATCHUPS[Math.floor(Math.random() * MATCHUPS.length)];
    $scope.firstGuyName = thisRound.player1.name;
    $scope.firstGuyImg = thisRound.player1.img;
    $scope.secondGuyName = thisRound.player2.name;
    $scope.secondGuyImg = thisRound.player2.img;

    // Make API call now while user is making a selection
    var hipCheck = sinBin.query({keywords: $scope.firstGuyName + '+' + $scope.secondGuyName + 'fight'});
    hipCheck.$promise.then(function(data) {
        // Choose 1 of 3 possible videos so user can see different fights with the same players
        var videoId = data.items[Math.floor(Math.random() * 2)].id.videoId;
        // Generate iframe code and insert into resource for gametime view to use.  Insert player names for current matchup as well
        var thisVideo = '<iframe width="420" height="315" src="http://www.youtube.com/embed/' + videoId + '?autoplay=1" frameborder="0" allowfullscreen class="center-block" id="youtube-player"></iframe>';
        videoData.videoHTML = thisVideo;
        videoData.firstGuy = $scope.firstGuyName;
        videoData.secondGuy = $scope.secondGuyName;
    });

    $scope.saveUserGuess = function(guess) {
        $localStorage.userGuess = guess;
    };

    $scope.changeView = function(view) {
        $location.path(view);
    };
  });
