var mainMod = angular.module('Beer',['ngRoute','ngResource']);

//main configuration for our angular application
mainMod.config(function($routeProvider){
    
    $routeProvider.when('/',{
        templateUrl:'page1.html',
        controller:'page1Contr'
    });
    
    $routeProvider.when('/all',{
        templateUrl:'page2.html',
        controller:'page2Contr'
    });  
});