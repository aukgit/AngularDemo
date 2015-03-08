/// <reference path="../Scripts/jquery-2.1.3.intellisense.js" />
/// <reference path="../Scripts/angular.js" />
/// <reference path="../Scripts/jquery-2.1.3.js" />
/// <reference path="../Scripts/bootstrap.js" />

var myNameSpace = angular.module('myApp', []);

myNameSpace.controller('MyController', function ($scope) {
    $scope.author = {
        firstName: "Alim",
        lastName: "Karim",
        title: "System Analyst",
        company: "Developers Organism"
    }
});
