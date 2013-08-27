'use strict';

angular.module('openWorldForumApp').controller('AllTalksCtrl', function ($scope,
                                                                         talks) {
    talks.getTalksByDay().then(function (result) {
        $scope.talksByDay = result;
    });
});
