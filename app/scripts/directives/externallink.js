'use strict';

angular.module('openWorldForumApp').directive('owfExternal', function () {
    return {
        restrict: 'A',
        link: function (scope,
                        element,
                        attrs) {
            element[0].addEventListener('click', function (event) {
                event.preventDefault();
                window.open(attrs.href, '_system');
            }, true);
        }
    };
});
