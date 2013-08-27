'use strict';

angular.module('openWorldForumApp').factory('speakers', function (dataloader) {
    var speakers,
        api = {},
        speakerById = {},
        speakersByTalkId = {},
        speakersPromise;

    speakersPromise = dataloader.load('speakers').then(function (data) {
        speakers = data;

        // Building cache
        angular.forEach(speakers, function (speaker) {
            speakerById[speaker.id] = speaker;

            angular.forEach(speaker.talks, function (talkId) {
                speakersByTalkId[talkId] = speakersByTalkId[talkId] || [];
                speakersByTalkId[talkId].push(speaker);
            });
        });
        return data;
    });

    api.get = function () {
        return speakersPromise;
    };

    api.getSpeakersByTalkId = function (talkId) {
        return speakersPromise.then(function () {
            return speakersByTalkId[talkId];
        });
    };

    api.getSpeakerById = function (id) {
        return speakersPromise.then(function () {
            return speakerById[id];
        });
    };

    return api;
});