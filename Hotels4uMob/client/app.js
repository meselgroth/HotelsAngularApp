var hotels4u = hotels4u || {};

var webApp = angular.module('webApp', ['ngRoute']);


var controllers = new hotels4u.controllers();
webApp.controller(controllers);

webApp.config(function ($routeProvider) {
    $routeProvider
        .when('/',
        {
            controller: 'searchController',
            templateUrl: 'client/hotels.html'
        })
        .otherwise(
        { redirectTo: '/' });
});

