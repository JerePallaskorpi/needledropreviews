const youtube = require('../config/youtube');

/**
 * Gets channel data with youtube username.
 *
 * @param {string} channel Channel name.
 * @param {Object} auth Youtube API authentication.
 *
 * @returns {Promise<string>} Promise with playlist uploads id.
 */
const getChannelData = async (channel, auth) => {
    const res = await youtube.channels.list({
        auth,
        part: 'snippet,contentDetails,statistics',
        forUsername: channel,
    });
    return res.data.items[0].contentDetails.relatedPlaylists.uploads;
};

module.exports = {
    getChannelData,
};
