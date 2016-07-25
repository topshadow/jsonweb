var $routeProviderReference;

var app = angular.module('app',['ngRoute'] )
    .config(function($routeProvider){
        $routeProviderReference = $routeProvider;
    }).run( function($route, $http, $rootScope){
        http = $http;
        $http.get("data/workspace/y001/customer.json").success(function(data){
            $rootScope.data=data;
            $rootScope.navbar =data.navbar;
            $rootScope.footbar = data.footbar;
            //
            var loop , currentRoute;
            for(loop = 0; loop < data.pages.length; loop++){
                currentRoute = data.pages[loop];
                var routeName = "/" + currentRoute.name;
                console.log(routeName,currentRoute.templateUrl);
                $routeProviderReference.when(routeName, {
                    url:routeName,
                    templateUrl: currentRoute.templateUrl,
                    controller:'initDataController'
                });
            }
            $route.reload();
            $routeProviderReference.otherwise('/index');
        });
    })
        .controller('initDataController',function($rootScope,$scope,$location){
            var path = $location.path().replace('/','');
            var  pages = $rootScope.data.pages;
            //search curennt Page Dats

            for(var i=0;i<pages.length;i++){
                if(pages[i].name==path){
                    $scope.data=pages[i];
                }


            }

});