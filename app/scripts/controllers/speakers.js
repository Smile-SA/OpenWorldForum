'use strict';

angular.module('openWorldForumApp').controller('SpeakersCtrl', function ($scope,
                                                                         speakers) {
    speakers.get().then(function (result) {
        $scope.speakers = result;
    });
});
