



var $routeProviderReference;
var rootScope;
var app = angular.module('app',['ngRoute','ngAnimate','mgcrea.ngStrap','mgcrea.ngStrap.modal','mgcrea.ngStrap.aside','mgcrea.ngStrap.tooltip'] )
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




app.controller('initDataController',function($rootScope,$scope,$location,setting){
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

    $rootScope.editComponent = function(component){
        switch (component.type){
            case "navbar":
                setting.setNavbar(component,'templates/edit/navbarEdit.html');
            break;
            default:
                alert('error unknow component type');
                break;
        }


    };


    // $('.carousel').carousel({
    //                 interval:1000
    // })
});

angular.module('app')
.factory('setting',function($aside,$rootScope){
    return {

        //实际上
        setNavbar: function (component,editTemplate) {
            var myAside = $aside({title: '编辑导航',
                animation:'am-fade-and-slide-right',
                placement:'right',
                templateUrl: editTemplate

            });
            // Pre-fetch an external template populated with a custom scope
            // var myOtherAside = $aside({title:'编辑导航',template:'templates/edit/navbarEdit.html',show:true});
            // Show when some event occurs (use $promise property to ensure the template has been loaded)
            // myAside.$promise.then(function () {
            //     myAside.show();
            // });
        },
        asideRight:function(){

        }
    }

});



angular.module('app')
    .config(function($asideProvider) {
        angular.extend($asideProvider.defaults, {
            animation: 'am-fadeAndSlideLeft',
            placement: 'left'
        });
    });