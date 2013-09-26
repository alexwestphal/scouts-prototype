

var cmpt = angular.module("scouts.cmpt", []);

cmpt.factory("Navigation", function() {
    var Nav = {
        exposed: null,
        expose: function(url) {
            console.log("Exposed: "+url);
            this.exposeUrl = url;
            for(var i=0; i<this.menus.length; i++) {
                var menu = this.menus[i];
                if(url == menu.url) {
                    this.exposed = menu;
                    return;
                }
            }
            this.exposed = null;
        },
        exposeUrl: "/",
        menus: [],
        openMenu: function() {},
        closeMenu: function() {}
    };

    return Nav;
});

cmpt.directive("topmenu", function() {
    return {
        restrict: "E",
        scope: false,
        controller: function($scope) {},
        templateUrl: "cmpt/top_menu.html"
    };
})

cmpt.directive("mainmenu", function() {
    return {
        restrict: "E",
        scope: {},
        controller: function($scope, $http, Navigation) {
            $http.get("config/navigation.json").success(function(data) {
                Navigation.menus = data;
                Navigation.expose(Navigation.exposeUrl);
            });
            $scope.nav = Navigation;
        },
        templateUrl: "cmpt/main_menu.html"
    };
})

cmpt.directive("navbox", function() {
    return {
        restrict: "E",
        scope: false,
        controller: function($scope, Navigation) {
            $scope.nav = Navigation;
        },
        templateUrl:"cmpt/nav_box.html",
        replace: true
    };
});

cmpt.directive("joinbox", function() {
    return {
        restrict: "E",
        scope: false,
        controller: function($scope) {},
        templateUrl:"cmpt/join_box.html",
        replace: true
    };
});