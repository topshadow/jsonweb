var $routeProviderReference;
var rootScope;
var app = angular.module('app',['ngRoute','mgcrea.ngStrap.modal','mgcrea.ngStrap.aside','mgcrea.ngStrap.tooltip'] )
    .config(function($routeProvider){
        $routeProviderReference = $routeProvider;
    })
    .run( function($route, $http, $rootScope){
        rootScope =$rootScope;

        http = $http;
        $http.get('default.json').success(function(data){
            // $rootScope.$apply(function(){
            $rootScope.default=data;
            // });
        });
        $http.get("website-data.json").success(function(data){
            $rootScope.websiteData=data;
            var loop , currentRoute;
            for(loop = 0; loop < data.pages.length; loop++){
                currentRoute = data.pages[loop];
                var routeName = "/" + currentRoute.name;
                console.log(routeName,currentRoute);
                $routeProviderReference.when(routeName, {
                    url:routeName,
                    templateUrl: 'components.html',//currentRoute.templateUrl,
                    controller:'initDataController'
                });
            }
            $route.reload();
            $routeProviderReference.otherwise('/index');
        });
    });

app.controller('initDataController',function($rootScope,$scope,$location){
    console.log('init data');
    var path = $location.path().replace('/','');
    var  pages = $rootScope.websiteData.pages;
    //search curennt Page Dats

    for(var i=0;i<pages.length;i++){
        if(pages[i].name==path){
            //find page data,and page data init
            $scope.data=pages[i];
            console.log($scope.data);
        }
    }


    // $('.carousel').carousel({
    //                 interval:1000
    // })
})

angular.module('app').factory('myAside',function(){

})