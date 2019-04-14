const { getAlbumCover } = require('./albumCover');
const youtube = require('../../config/youtube');
const { dbVideoCreate } = require('../../queries/video');
const { filterAlbumReviews } = require('./parseReviewVideos');

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Gets playlist videos for a max of 50 results.
 *
 * @param {string} playlistId Playlist id found from channel playlist uploads.
 * @param {string} [nextPageToken] Id for the next page results. Returned from previous query.
 * @param {Object} auth Youtube API authentication.
 *
 * @returns {Promise<Object[]>} Promise with playlist uploads id.
 */
const getSinglePlaylistData = async (playlistId, nextPageToken, auth) => (
    youtube.playlistItems.list({
        playlistId,
        auth,
        part: 'snippet,contentDetails',
        maxResults: 50,
        pageToken: nextPageToken,
    })
);

/**
 * Gets playlist data for every result found with playlist id.
 *
 * @param {string} playlistId Playlist id found from channel playlist uploads.
 * @param {Object} auth Youtube API authentication.
 *
 * @returns {Promise<Object[]>} Promise with playlist uploads id.
 */
const getPlaylistData = async (playlistId, auth) => {
    let playlistItems = [];
    let nextPageToken = null;
    let res = await getSinglePlaylistData(playlistId, nextPageToken, auth);
    playlistItems = [...playlistItems, res.data.items];
    ({ nextPageToken } = res.data);
    let testAmount = 0;
    while (testAmount < 1) {
        // eslint-disable-next-line
        res = await getSinglePlaylistData(playlistId, nextPageToken, auth);
        playlistItems = [...playlistItems, res.data.items];
        ({ nextPageToken } = res.data);
        testAmount += 1;
    }

    const videos = filterAlbumReviews(playlistItems);
    console.log(`Found playlist videos to be added ${videos.length}`);

    // API has query limit, so doing 5 at a time for now and wait 10 seconds between new queries.
    // Should change later to keep querying until error, after error wait some time and repeat.
    /* eslint-disable */
    let queryLoop = 0;
    while (queryLoop < videos.length) {
        let coverUrls = await videos.slice(queryLoop, queryLoop + 5).map(video => getAlbumCover(video.details.artist, video.details.album));
        coverUrls = await Promise.all(coverUrls);
        coverUrls.forEach((url, index) => {
            if (url) videos[queryLoop + index].details.albumCover = url;
        });

        await sleep(10000);

        queryLoop += 5;
    }
    /* eslint-disable */

    await dbVideoCreate(videos);
};

module.exports = {
    getPlaylistData,
};
