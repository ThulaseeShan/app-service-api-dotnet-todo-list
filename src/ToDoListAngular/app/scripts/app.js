//
// Use the following code for running without authentication.
//
//'use strict';
//angular.module('todoApp', ['ngRoute'])
//.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
//    $routeProvider.when("/Home", {
//        controller: "homeCtrl",
//        templateUrl: "/App/Views/Home.html",
//    }).when("/TodoList", {
//        controller: "todoListCtrl",
//        templateUrl: "/App/Views/TodoList.html",
//    }).when("/UserData", {
//        controller: "userDataCtrl",
//        templateUrl: "/App/Views/UserData.html",
//    }).otherwise({ redirectTo: "/Home" });
//}]);


//
// Use the following code for running with authentication.
//
'use strict';
angular.module('todoApp', ['ngRoute', 'AdalAngular'])
.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalProvider) {

    $routeProvider.when("/Home", {
        controller: "homeCtrl",
        templateUrl: "/App/Views/Home.html",
    }).when("/TodoList", {
        controller: "todoListCtrl",
        templateUrl: "/App/Views/TodoList.html",
        requireADLogin: true,
    }).when("/UserData", {
        controller: "userDataCtrl",
        templateUrl: "/App/Views/UserData.html",
    }).otherwise({ redirectTo: "/Home" });

    var endpoints = {
        "https://sampleaspnetmvcappapi.azurewebsites.net/": "caedac4f-a3cc-4115-8b1d-9fe2b6f02900"
    };

    adalProvider.init(
        {
            instance: 'https://login.microsoftonline.com/',
            tenant: '{microsoft.onmicrosoft.com',
            clientId: 'caedac4f-a3cc-4115-8b1d-9fe2b6f02900',
            extraQueryParameter: 'nux=1',
            endpoints: endpoints
            //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
        },
        $httpProvider
        );
}]);

