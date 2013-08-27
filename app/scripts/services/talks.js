'use strict';

angular.module('openWorldForumApp').factory('talks', function ($filter,
                                                               $q,
                                                               $localStorage,
                                                               dataloader) {
    var api = {},
        talksPromise,
        talks = [],
        talkById = {};

    talksPromise = dataloader.load('talks').then(function (data) {
        talks = data;

        // Building cache
        angular.forEach(talks, function (talk) {
            talkById[talk.id] = talk;
        });

        return talks;
    });

    function formatDay(date) {
        return $filter('date')(date, 'MMM d, yyyy');
    }

    function getDays(from) {
        var fromDate, days;

        fromDate = from ? from : '2013-10-03';
        fromDate = new Date(fromDate);
        days = [];

        angular.forEach(talks, function (talk) {
            if (talk.starts_at !== null) {
                var startAtDate = new Date(talk.starts_at);
                var startAtDay = formatDay(startAtDate);

                if ((days.indexOf(startAtDay) < 0) && (startAtDate > fromDate)) {
                    days.push(startAtDay);
                }
            }
        });

        return days;
    }

    api.getTalks = function () {
        return talksPromise;
    };

    // No caching: too lazy
    api.getTalksBySpeakerId = function (speakerId) {
        return talksPromise.then(function (_talks) {
            var talksByDay, days;

            talksByDay = {};
            days = getDays();

            angular.forEach(days, function (day) {
                var talksOfTheDay = [];

                angular.forEach(_talks, function (talk) {
                    var talkDay = formatDay(talk.starts_at);
                    if (talkDay == day && talk.speakers.length > 0 && talk.speakers.indexOf(parseInt(speakerId, 10)) >= 0) {
                        talksOfTheDay.push(talk);
                    }
                });

                if (talksOfTheDay.length > 0) {
                    talksByDay[day] = talksOfTheDay;
                }
            });

            return talksByDay;
        });
    };

    // Cached
    api.getTalkById = function (id) {
        return talksPromise.then(function () {
            return talkById[id];
        });
    };

    // FIXME: No caching: depends on day
    api.getTalksByDay = function (from) {
        return talksPromise.then(function (_talks) {
            var talksByDay, days;

            talksByDay = {};
            days = getDays(from);

            angular.forEach(days, function (day) {
                var talksOfTheDay = [];

                angular.forEach(_talks, function (talk) {
                    var talkDay = formatDay(talk.starts_at);
                    if (talkDay == day) {
                        talksOfTheDay.push(talk);
                    }
                });

                talksByDay[day] = talksOfTheDay;
            });

            return talksByDay;
        });
    };

    // No caching: depends on talks attended
    api.getMyTalks = function () {
        return talksPromise.then(function (_talks) {
            var talksByDay, days, myTalks;

            myTalks = $localStorage.myTalks || [];
            talksByDay = {};
            days = getDays();

            if (myTalks.length === 0) {
                return [];
            }

            angular.forEach(days, function (day) {
                var talksOfTheDay = [];

                angular.forEach(_talks, function (talk) {
                    var talkDay = formatDay(talk.starts_at);
                    if (talkDay == day && myTalks.indexOf(parseInt(talk.id, 10)) >= 0) {
                        talksOfTheDay.push(talk);
                    }
                });

                if (talksOfTheDay.length > 0) {
                    talksByDay[day] = talksOfTheDay;
                }
            });

            return talksByDay;
        });
    };

    api.attendTalk = function (talkId) {
        $localStorage.myTalks = $localStorage.myTalks || [];

        if ($localStorage.myTalks.indexOf(talkId) < 0) {
            $localStorage.myTalks.push(talkId);
        }
    };

    api.unattendTalk = function (talkId) {
        if ($localStorage.myTalks) {
            $localStorage.myTalks.splice($localStorage.myTalks.indexOf(talkId), 1);
        }
    };

    api.isAttendedTalk = function (talkId) {
        return $localStorage.myTalks && $localStorage.myTalks.indexOf(talkId) >= 0;
    };

    return api;
});
