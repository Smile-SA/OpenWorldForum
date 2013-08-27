'use strict';

angular.module('openWorldForumApp').controller('TalkCtrl', function ($scope,
                                                                     $routeParams,
                                                                     talks) {
    var talkId = parseInt($routeParams.id, 10);

    talks.getTalkById(talkId).then(function (result) {
        $scope.talk = result;
    });

    $scope.attendTalk = talks.attendTalk;
    $scope.unattendTalk = talks.unattendTalk;

    $scope.$watch(function () {
        return talks.isAttendedTalk(talkId);
    }, function (newValue) {
        $scope.isAttendedTalk = newValue;
    });
});
