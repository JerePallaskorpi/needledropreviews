const { getAlbumCover } = require('../helpers/playlist/albumCover');
const db = require('../models');

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
/**
 * Adds videos to the database.
 *
 * @param {Object[]} playlistVideos List of videos found from playlist data.
 */
const dbVideoCreate = async (playlistVideos) => {
    let existingVideoIds = [];

    await db.Video.find({}, (err, videos) => {
        if (videos.length) existingVideoIds = videos.map(a => a.videoId);
    });

    const videosToBeAdded = playlistVideos.filter(video => !existingVideoIds
        .some(videoId => videoId === video.videoId));

    console.log('Reviews to be added');
    console.log(videosToBeAdded.map(vid => vid.title));

    /* eslint-disable */
    let queryIndex = 0;
    while (queryIndex < videosToBeAdded.length) {
        const coverUrl = await getAlbumCover(
            videosToBeAdded[queryIndex].details.artist,
            videosToBeAdded[queryIndex].details.album,
        );
        if (coverUrl) videosToBeAdded[queryIndex].details.albumCover = coverUrl;

        await sleep(10000);

        queryIndex += 1;
    }
    /* eslint-disable */

    // const videosToBeEdited = playlistVideos.filter(video => existingVideoIds
    //     .some(videoId => videoId === video.videoId));
    // Update video details for existing reviews.
    // videosToBeEdited.forEach((editedVideo) => {
    //     db.Video.updateOne({ videoId: editedVideo.videoId },
    //         { $set: { details: editedVideo.details } },
    //         { upsert: true }, (err) => {
    //             if (err) console.log(err);
    //         });
    // });

    // Insert new review videos.
    db.Video.insertMany(videosToBeAdded, { continueOnError: true }, err => (err
        ? console.log(err)
        : console.log(`Database inserted with ${videosToBeAdded.length} results.`)));
};

module.exports = {
    dbVideoCreate,
};
