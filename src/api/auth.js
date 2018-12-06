/**
 * Init API client library and login user.
 */
import { getChannel } from './channelData';

export const initClient = async () => {
    const clientId = '956596483645-gmme6psviai848l6sgjt7vvrgfpmcom0.apps.googleusercontent.com';
    const discoveryDocs = ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'];
    const scope = 'https://www.googleapis.com/auth/youtube.readonly';

    await new Promise(resolve => window.gapi.load('client', async () => {
        await window.gapi.client.init({
            discoveryDocs,
            clientId,
            scope,
        });
        resolve();
    }));
    const loggedIn = window.gapi.auth2.getAuthInstance().isSignedIn.get();
    if (!loggedIn) window.gapi.auth2.getAuthInstance().signIn();
    return getChannel('theneedledrop');
};

export const getVideoPlaylist = async (playlistId, nextPageToken) => {
    let playListItems = [];
    const requestOptions = {
        playlistId,
        part: 'snippet',
        maxResults: 50,
        pageToken: nextPageToken,
    };
    const request = window.gapi.client.youtube.playlistItems.list(requestOptions);


    await new Promise(resolve => request.execute((response) => {
        if (response.nextPageToken) {
            const requestOptions2 = {
                playlistId,
                part: 'snippet',
                maxResults: 50,
                pageToken: response.nextPageToken,
            };
            const request2 = window.gapi.client.youtube.playlistItems.list(requestOptions2);
            request2.execute((response2) => {
                playListItems = [...playListItems, response2.items];
                resolve();
            });
        }
        playListItems = [...playListItems, response.items];
    }));

    const items = playListItems.flatMap(i => i);
    return {
        albumReviews: items.filter(item => item.snippet.title.includes('ALBUM REVIEW')),
    };
};
