'use strict';

angular.module('openWorldForumApp').controller('SpeakerTalksCtrl', function ($scope,
                                                                             $routeParams,
                                                                             talks) {

    talks.getTalksBySpeakerId($routeParams.id).then(function (result) {
        $scope.talksByDay = result;
    });
});
