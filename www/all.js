
var app = angular.module('app', ['ngRoute']);

var $routeProviderReference;
var currentRoute;
app.config(function($routeProvider){
    $routeProviderReference = $routeProvider;
});


    app.run( function($route, $http, $rootScope){
        $http.get("data/workspace/y001/customer.json").success(function(data){
            $rootScope.data=data;
            var loop = 0, currentRoute;
            for(loop = 0; loop < data.pages.length; loop++){
                currentRoute = data.pages[loop];
                var routeName = "/" + currentRoute.name;
                console.log(routeName);
                $routeProviderReference.when(routeName, {
                    url:routeName,
                    templateUrl: currentRoute.templateUrl,
                    controller:'initDataControoler'
                });
            }
            $route.reload();
            $routeProviderReference.otherwise('/index');
        });
    });

app.controller('initDataControoler',function($rootScope,$scope,$location){
// $scope.data=$rootScope.pages[]
    var path = $location.path().replace('/','');
   var  pages = $rootScope.data.pages;
    for(var index in pages){
        page.name==path;
        $scope.data=pages[index];
    }
});