
var app = angular.module('app', ['ngRoute']);

var $routeProviderReference;
var currentRoute;
app.config(function($routeProvider){
    $routeProviderReference = $routeProvider;
});


    app.run( function($route, $http, $rootScope){
        $http.get("data/workspace/y001/customer.json").success(function(data){
            var loop = 0, currentRoute;
            for(loop = 0; loop < data.pages.length; loop++){
                currentRoute = data.pages[loop];
                var routeName = "/" + currentRoute.name;
                console.log(routeName);
                $routeProviderReference.when(routeName, {
                    url:routeName,
                    templateUrl: currentRoute.templateUrl
                });
            }
            $route.reload();
            $routeProviderReference.otherwise('/index');
        });
    });




