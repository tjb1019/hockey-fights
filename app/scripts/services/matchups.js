'use strict';

/**
 * @ngdoc service
 * @name hockeyFightsApp.matchups
 * @description
 * # matchups
 * Constant in the hockeyFightsApp.
 */
angular.module('hockeyFightsApp')
  .constant('MATCHUPS', [
  	{
        player1: {
          name: 'Peter Worrell',
          img: '../../images/peter-worrell.jpg'
        },
        player2: {
          name: 'Matthew Barnaby',
          img: '../../images/matthew-barnaby.jpg'
        }
    }
  ]);
