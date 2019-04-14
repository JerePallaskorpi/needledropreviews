const { google } = require('googleapis');

const youtube = google.youtube({
    version: 'v3',
});

module.exports = youtube;
