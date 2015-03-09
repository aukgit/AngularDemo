/// <reference path="../Scripts/jquery-2.1.3.intellisense.js" />
/// <reference path="../Scripts/angular.js" />
/// <reference path="../Scripts/jquery-2.1.3.js" />
/// <reference path="../Scripts/bootstrap.js" />

var myNameSpace = angular.module('myApp', []);

myNameSpace.controller('MyController', function ($scope,$http) {
    $http.get("../Data/data.json").success(function(data) {
        $scope.artists = data;

    });

});
