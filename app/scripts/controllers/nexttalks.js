'use strict';

angular.module('openWorldForumApp').controller('NextTalksCtrl', function ($scope,
                                                                          talks) {
    var now = new Date().getTime();

    talks.getTalksByDay(now).then(function (result) {
        $scope.talksByDay = result;
    });
});
