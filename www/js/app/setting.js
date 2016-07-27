angular.module('app')
.factory('setting',function($aside,$rootScope){
    return {
        asideLeft: function ($scope) {
            var myAside = $aside({title: 'My Title', content: 'My Content', show: true});
            // Pre-fetch an external template populated with a custom scope
            var myOtherAside = $aside({scope: $scope, template: 'components/services/sea-service-content.html'});
            // Show when some event occurs (use $promise property to ensure the template has been loaded)
            myOtherAside.$promise.then(function () {
                myOtherAside.show();
            });
        },
        asideRight:function(){

        }
    }

});