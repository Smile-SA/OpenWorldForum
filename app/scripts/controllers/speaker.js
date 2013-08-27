'use strict';

angular.module('openWorldForumApp').controller('SpeakerCtrl', function ($scope,
                                                                        $routeParams,
                                                                        speakers) {
    speakers.getSpeakerById($routeParams.id).then(function (result) {
        $scope.speaker = result;
    });
});
