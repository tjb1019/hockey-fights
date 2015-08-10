"use strict";angular.module("hockeyFightsApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/gametime",{templateUrl:"views/gametime.html",controller:"GametimeCtrl",controllerAs:"gametime"}).otherwise({redirectTo:"/"})}]),angular.module("hockeyFightsApp").controller("MainCtrl",["$scope","sinBin","videoData","MATCHUPS","$sce","$location",function(a,b,c,d,e,f){var g=d;a.userGuess;var h=g[Math.floor(Math.random()*g.length)];a.firstGuyName=h.player1.name,a.firstGuyImg=h.player1.img,a.secondGuyName=h.player2.name,a.secondGuyImg=h.player2.img,c.firstGuy=a.firstGuyName,c.secondGuy=a.secondGuyName,a.saveUserGuess=function(b){a.userGuess=b},a.playVideo=function(){f.path("/gametime")}}]),angular.module("hockeyFightsApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("hockeyFightsApp").factory("sinBin",["$resource",function(a){return a("https://www.googleapis.com/youtube/v3/search?part=snippet&q=:keywords&type=video&key=AIzaSyADdXtRZ0COj-iZ9CUxkHwsNjFa4YRoiIk",{},{query:{method:"GET",params:{keywords:"hockey fight"},isArray:!1}})}]),angular.module("hockeyFightsApp").constant("MATCHUPS",[{player1:{name:"Peter Worrell",img:"../../images/peter-worrell.c28806be.jpg"},player2:{name:"Matthew Barnaby",img:"../../images/matthew-barnaby.8a39205f.jpg"}}]),angular.module("hockeyFightsApp").controller("GametimeCtrl",["$scope","sinBin","videoData","$sce","$location",function(a,b,c,d,e){var f=b.query({keywords:c.firstGuy+c.secondGuy});f.$promise.then(function(b){var c=b.items[0].id.videoId,e='<iframe width="420" height="315" src="http://www.youtube.com/embed/'+c+'" frameborder="0" allowfullscreen></iframe>';a.iframeCode=d.trustAsHtml(e)})}]),angular.module("hockeyFightsApp").factory("videoData",function(){return{firstGuy:"",secondGuy:""}}),angular.module("hockeyFightsApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/gametime.html",'<div ng-app ng-controller="GametimeCtrl"> <div class="row"> <div ng-bind-html="iframeCode"></div> </div> <div class="row"> <p class="lead text-center">Who do you think won the fight?</p> </div> </div>'),a.put("views/main.html",'<div ng-app ng-controller="MainCtrl"> <div class="row"> <p class="lead text-center">Who would win in a bout between:</p> </div> <div class="row"> <div class="col-xs-12 col-sm-12 col-md-5"> <h3 class="text-center"><span class="label label-danger">{{ firstGuyName }}</span></h3> <img class="player-thumbnail img-responsive center-block" ng-src="{{ firstGuyImg }}" ng-click="saveUserGuess(firstGuyName); playVideo()"> </div> <div class="col-xs-12 col-sm-12 col-md-5 col-md-offset-2"> <h3 class="text-center"><span class="label label-danger">{{ secondGuyName }}</span></h3> <img class="player-thumbnail img-responsive center-block" ng-src="{{ secondGuyImg }}" ng-click="saveUserGuess(secondGuyName); playVideo()"> </div> </div> </div>')}]);