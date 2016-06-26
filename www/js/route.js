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
                    teamplateUrl: "templates/production.html",
                    controller:"allCtrl"
                });

        $urlRouterProvider.otherwise("/index");
    });