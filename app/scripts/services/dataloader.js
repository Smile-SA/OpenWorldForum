'use strict';

angular.module('openWorldForumApp').factory('dataloader', function ($localStorage,
                                                                    $http,
                                                                    $q) {
    var api = {};

    var loadFromWeb = function (webservice) {
        // TODO: Provider + grunt-replace task to make this configurable
        return $http.get('http://openworldforum.org/api/' + webservice);
    };

    api.load = function (resourceKey) {
        var data, deferred;

        data = $localStorage[resourceKey];
        deferred = $q.defer();

        if (data) {
            deferred.resolve(data);
        } else {
            loadFromWeb(resourceKey).success(function (data) {
                $localStorage[resourceKey] = data[resourceKey];
                deferred.resolve(data[resourceKey]);
            });
        }

        return deferred.promise;
    };

    return api;
});
