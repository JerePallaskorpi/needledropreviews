const db = require('../models');

/**
 * Adds videos to the database.
 *
 * @param {Object[]} playlistVideos List of videos found from playlist data.
 */
const dbVideoCreate = async (playlistVideos) => {
    let existingTitles = [];

    await db.Video.find({}, (err, videos) => {
        if (videos.length) existingTitles = videos.map(a => a.title);
    });

    const videosToBeAdded = playlistVideos.filter(video => !existingTitles
        .some(title => title === video.title));

    db.Video.insertMany(videosToBeAdded, { continueOnError: true }, err => (err
        ? console.log(err)
        : console.log(`Database updated with ${videosToBeAdded.length} results.`)));
};

module.exports = {
    dbVideoCreate,
};
