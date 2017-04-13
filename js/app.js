angular.module('app', [
    'ui.router', 'leaflet-directive'
]);

angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
        url: '',
        templateUrl: './templates/main.html'
    });

    $urlRouterProvider.otherwise(function($injector) {
        $injector.get('$state').go('home');
    });
});