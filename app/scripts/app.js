'use strict';

angular.module('openWorldForumApp', ['snap', 'ngStorage', 'ngRoute']).config(function ($routeProvider) {
    $routeProvider
        .when('/main', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            backgroundColor: 'white'
        })
        .when('/home', {
            templateUrl: 'views/home.html',
            backgroundColor: '#272627'
        })
        .when('/concept/:selectedTab', {
            templateUrl: 'views/concept.html',
            controller: 'ConceptCtrl',
            backgroundColor: 'white'
        })
        .when('/speakers', {
            templateUrl: 'views/speakers.html',
            backgroundColor: '#413f41'
        })
        .when('/speaker/:id', {
            templateUrl: 'views/speaker.html',
            controller: 'SpeakerCtrl',
            isSecondLevel: true,
            backgroundColor: '#413f41'
        })
        .when('/mytalks', {
            templateUrl: 'views/mytalks.html',
            controller: 'MyTalksCtrl',
            backgroundColor: '#413f41'
        })
        .when('/schedule', {
            templateUrl: 'views/schedule.html',
            backgroundColor: '#272627'
        })
        .when('/talk/:id', {
            templateUrl: 'views/talk.html',
            controller: 'TalkCtrl',
            isSecondLevel: true,
            backgroundColor: '#413f41'
        })
        .when('/venue', {
            templateUrl: 'views/venue.html',
            backgroundColor: 'white'
        })
        .when('/partners', {
            templateUrl: 'views/partners.html',
            backgroundColor: 'white'
        })
        .otherwise({
            redirectTo: '/home'
        });
});

angular.module('openWorldForumApp').run(['$rootScope', function ($rootScope) {
    $rootScope.history = history;
    $rootScope.$on('$routeChangeSuccess', function (event,
                                                    current) {
        $rootScope.isSecondLevel = current.isSecondLevel;
        $rootScope.backgroundColor = current.backgroundColor;
    });
}]);