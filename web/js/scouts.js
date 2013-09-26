/**
 * Scouts Module
 */
var scouts= angular.module("scouts", ["scouts.cmpt"]);

scouts.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $routeProvider
        .when("/",                      {templateUrl:"tmpl/home.html",          controller: "HomeCtrl"})
        .when("/about",                 {templateUrl:"tmpl/about.html",         controller: "AboutCtrl"})
        .when("/values",                {templateUrl:"tmpl/values.html",        controller: "AboutCtrl"})
        .when("/faq",                   {templateUrl:"tmpl/faq.html",           controller: "AboutCtrl"})
        .when("/history",               {templateUrl:"tmpl/history.html",       controller: "AboutCtrl"})
        .when("/management",            {templateUrl:"tmpl/management.html",    controller: "AboutCtrl"})
        .when("/partners",              {templateUrl:"tmpl/partners.html",      controller: "AboutCtrl"})
        .when("/volunteer",             {templateUrl:"tmpl/volunteer.html",     controller: "AboutCtrl"})
        .when("/programme",             {templateUrl:"tmpl/programme.html",     controller: "ProgrammeCtrl"})
        .when("/programme/keas",        {templateUrl:"tmpl/keas.html",          controller: "ProgrammeCtrl"})
        .when("/programme/cubs",        {templateUrl:"tmpl/cubs.html",          controller: "ProgrammeCtrl"})
        .when("/programme/scouts",      {templateUrl:"tmpl/scouts.html",        controller: "ProgrammeCtrl"})
        .when("/programme/venturers",   {templateUrl:"tmpl/venturers.html",     controller: "ProgrammeCtrl"})
        .when("/programme/rovers",      {templateUrl:"tmpl/rovers.html",        controller: "ProgrammeCtrl"})
        .when("/programme/adventure",   {templateUrl:"tmpl/adventure.html",     controller: "ProgrammeCtrl"})
        .when("/news",                  {templateUrl:"tmpl/news.html",          controller: "NewsCtrl"})
        .when("/happening",             {templateUrl:"tmpl/happening.html",     controller: "NewsCtrl"})
        .when("/donate",                {templateUrl:"tmpl/donate.html",        controller: "DonateCtrl"})
        .when("/donate_now",            {templateUrl:"tmpl/donate.html",        controller: "DonateCtrl"})
        .when("/ways_to_give",          {templateUrl:"tmpl/ways_to_give.html",  controller: "DonateCtrl"})
        .when("/sponsorship",           {templateUrl:"tmpl/sponsorship.html",   controller: "DonateCtrl"})
        .when("/join",                  {templateUrl:"tmpl/join.html",          controller: "JoinCtrl"})
        .when("/updates",               {templateUrl:"tmpl/updates.html",       controller: "UpdatesCtrl"})
        .otherwise({redirectTo: "/"})
});

scouts.controller("HomeCtrl", ["$scope", "Navigation", function($scope, Nav) {
    Nav.expose("/");
}]);

scouts.controller("AboutCtrl", ["$scope", "Navigation", function($scope, Nav) {
    Nav.expose("/about");
}]);

scouts.controller("ProgrammeCtrl", ["$scope", "Navigation", function($scope, Nav) {
    Nav.expose("/programme");
}]);

scouts.controller("NewsCtrl", ["$scope", "Navigation", function($scope, Nav) {
    Nav.expose("/news");
}]);

scouts.controller("DonateCtrl", ["$scope", "Navigation", function($scope, Nav) {
    Nav.expose("/donate");
}]);

scouts.controller("JoinCtrl", ["$scope", "Navigation", function($scope, Nav) {
    Nav.expose("/");
}]);

scouts.controller("UpdateCtrl", ["$scope", "Navigation", function($scope, Nav) {
    Nav.expose("/");
}]);



