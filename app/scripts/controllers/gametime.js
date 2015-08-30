'use strict';

/**
 * @ngdoc function
 * @name hockeyFightsApp.controller:GametimeCtrl
 * @description
 * # GametimeCtrl
 * Controller of the hockeyFightsApp
 */
angular.module('hockeyFightsApp')
  .controller('GametimeCtrl', function ($scope, videoData, $sce, $localStorage) {
  	
  		// Declare variables
  		$scope.firstGuyName = videoData.firstGuy;
  		$scope.secondGuyName = videoData.secondGuy;
      $scope.youRight = $localStorage.correct;
      $scope.youWrong = $localStorage.wrong;

  		// Inject iframe HTML into gametime view
  		$scope.iframeCode = $sce.trustAsHtml(videoData.videoHTML);

  		// Store user answer
  		$scope.saveUserAnswer = function (answer) {
  			$localStorage.userAnswer = answer;
  			compareResults();
  		};

  		// Compare user guess to user answer
  		function compareResults() {
  			var guess = $localStorage.userGuess;
  			var answer = $localStorage.userAnswer;

  			// Check to see if correct guesses and wrong guesses have been initialized
  			if(!$localStorage.correct) {
  				$localStorage.correct = 0;
  			}
  			else if(!$localStorage.wrong) {
  				$localStorage.wrong = 0;
  			}

  			// Increment correct and wrong guesses for this round
  			if(guess == answer) {
  				$localStorage.correct += 1;
          $scope.youRight = $localStorage.correct;
  			}
  			else if(guess != answer) {
  				$localStorage.wrong += 1;
          $scope.youWrong = $localStorage.wrong;
  			}
  			else{
  				console.log('Houston, we have a problem.');
  			}
  		};
	    
  });
