'use strict';

angular.module('openWorldForumApp').controller('TalkSpeakersCtrl', function ($scope,
                                                                             $routeParams,
                                                                             speakers) {

    speakers.getSpeakersByTalkId($routeParams.id).then(function (result) {
        $scope.speakers = result;
    });
});
