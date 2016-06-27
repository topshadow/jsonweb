
//调试对象
var rootScope;


angular.module('app', ['ionic','app.route','app.controller'])
    .config(['$ionicConfigProvider', function($ionicConfigProvider) {
        $ionicConfigProvider.tabs.position('bottom'); // other values: top
    }])
    .run(function($ionicPlatform, $http,$rootScope) {
        root = $rootScope;
        //初始化页面参数
        $http.get(config.localUrl+'default.json').then(function(rtn){
           $rootScope.default = rtn.data;
        });
        $http.get(config.localUrl+'customer.json').then(function(rtn){
            $rootScope.customer = rtn.data;
        });
        $http.get(config.localUrl+'article.json').then(function(rtn){
            $rootScope.article = rtn.data;
        });
        $http.get(config.localUrl+'image.json').then(function(rtn){
            $rootScope.image = rtn.data;
        });
        config.$http= $http;
        var url = "";
        if (ionic.Platform.isAndroid()) {
            url = "/android_asset/www/";
        }
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
    });

//调试服务器的数据
var logData = function(){
    //初始化页面参数
    config.$http.get(config.localUrl+'default.json').then(function(rtn){
        console.group("default setting");
        console.dir(rtn.data);
        console.groupEnd();
    });
    config.$http.get(config.localUrl+'customer.json').then(function(rtn){
        console.group("customer setting");
        console.dir(rtn.data);
        console.groupEnd();
    });
    config.$http.get(config.localUrl+'article.json').then(function(rtn){
        console.group("article setting");
        console.dir(rtn.data);
        console.groupEnd();
    });
    config.$http.get(config.localUrl+'image.json').then(function(rtn){
        console.group("image setting");
        console.dir(rtn.data);
        console.groupEnd();

    });

}
angular.module('app.controller',[])
//日志功能:记录进入页面的数据
    .controller('allCtrl',function($http,$scope,$rootScope,$state,$location){

        $scope.carousel=function() {
            $('.carousel').carousel({
                interval: 2000
            }).carousel('cycle')
        }

    });
var root;
//后期换本地存储,localstorage




angular.module('app.route', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('index',{
                url:'/index',
                templateUrl:'templates/index.html',
                controller:'allCtrl'
            })
            .state('about',
                {
                url: '/about',
                templateUrl:'templates/about.html',
                controller:"allCtrl"
                })
            .state('contact',
                {
                url:"/contact",
                templateUrl:"templates/contact.html",
                controller:"allCtrl"
                })
            .state('team',
                {
                url:"/team",
                templateUrl:"templates/team.html",
                controller:"allCtrl"
                })
            .state('production',
                {
                    url:"/production",
                    templateUrl: "templates/production.html",
                    controller:"allCtrl"
                });

        $urlRouterProvider.otherwise("/index");
    });
/**
 * Created by wac on 2016/6/22.
 */
