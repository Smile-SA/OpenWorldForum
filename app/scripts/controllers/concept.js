'use strict';

angular.module('openWorldForumApp').controller('ConceptCtrl', function ($scope,
                                                                        $routeParams) {
    $scope.currentTab = $routeParams.selectedTab;
});
