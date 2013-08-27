'use strict';

angular.module('openWorldForumApp').controller('SidebarCtrl', function ($scope,
                                                                        $location) {
    $scope.openLink = function (path,
                                isExternal) {
        if (isExternal) {
            window.open(path, '_system');
        } else {
            $location.path(path);
        }
    };
});
