const db = require('../models');

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

    const videosToBeEdited = playlistVideos.filter(video => existingVideoIds
        .some(videoId => videoId === video.videoId));

    console.log(videosToBeAdded.length);
    console.log(videosToBeEdited.length);

    // Update video details for existing reviews.
    videosToBeEdited.forEach((editedVideo) => {
        db.Video.updateOne({ videoId: editedVideo.videoId },
            { $set: { details: editedVideo.details } },
            { upsert: true }, (err) => {
                if (err) console.log(err);
            });
    });

    // Insert new review videos.
    db.Video.insertMany(videosToBeAdded, { continueOnError: true }, err => (err
        ? console.log(err)
        : console.log(`Database inserted with ${videosToBeAdded.length} results.`)));
};

module.exports = {
    dbVideoCreate,
};
