// Get channel from API
export const getChannel = (channel) => (
    window.gapi.client.youtube.channels
        .list({
            part: 'snippet,contentDetails,statistics',
            forUsername: channel,
        })
        .then(response => response)
        .catch(error => console.error(error))
);
