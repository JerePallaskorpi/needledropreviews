const { google } = require('googleapis');
const { getChannelData } = require('./channel');
const { getPlaylistData } = require('./playlist');

const { OAuth2 } = google.auth;
const { TOKEN_SECRET, CLIENT_SECRET } = process.env;

const updateReviewData = async () => {
    const credentials = JSON.parse(CLIENT_SECRET);
    const clientSecret = credentials.installed.client_secret;
    const clientId = credentials.installed.client_id;
    const redirectUrl = credentials.installed.redirect_uris[0];
    const oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);

    oauth2Client.credentials = JSON.parse(TOKEN_SECRET);

    const channel = await getChannelData('theneedledrop', oauth2Client);
    getPlaylistData(channel, oauth2Client);
};

module.exports = {
    updateReviewData,
};
