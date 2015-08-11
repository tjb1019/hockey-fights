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
          img: 'images/peter-worrell.jpg'
        },
        player2: {
          name: 'Matthew Barnaby',
          img: 'images/matthew-barnaby.jpg'
        }
    },
    {
        player1: {
          name: 'Tie Domi',
          img: 'images/tie-domi.jpg'
        },
        player2: {
          name: 'Donald Brashear',
          img: 'images/donald-brashear.jpg'
        }
    },
    {
        player1: {
          name: 'Georges Laraque',
          img: 'images/georges-laraque.png'
        },
        player2: {
          name: 'Colton Orr',
          img: 'images/colton-orr.jpg'
        }
    },
    {
        player1: {
          name: 'Eric Lindros',
          img: 'images/eric-lindros.jpg'
        },
        player2: {
          name: 'Scott Stevens',
          img: 'images/scott-stevens.jpg'
        }
    },
    {
        player1: {
          name: 'Andre Roy',
          img: 'images/andre-roy.jpg'
        },
        player2: {
          name: 'Riley Cote',
          img: 'images/riley-cote.jpg'
        }
    }
  ]);
