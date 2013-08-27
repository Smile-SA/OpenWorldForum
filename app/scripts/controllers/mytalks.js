'use strict';

angular.module('openWorldForumApp').controller('MyTalksCtrl', function ($scope,
                                                                        talks) {
    talks.getMyTalks().then(function (result) {
        $scope.talksByDay = result;
    });
});
