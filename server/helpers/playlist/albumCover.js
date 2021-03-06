const fetch = require('node-fetch');

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Parses text for comparison.
 *
 * @param {string} text Text to be parsed.
 *
 * @returns {string} Parsed text.
 */
const parsify = text => text.toLowerCase()
    .replace('&', 'and')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[\W_]+/g, ' ')
    .trim();

/**
 * Parses text for comparison.
 *
 * @param {string} text Text to be parsed.
 *
 * @returns {string} Parsed text.
 */
const parsifyArtistParam = text => text.toLowerCase()
    .replace('&', 'and')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .trim();

/**
 * Gets album cover from musicbrainz API.
 *
 * @param {string} artistName Name of the artist.
 * @param {string} albumName Name of the album.
 *
 * @returns {Promise<string>} Promise with release group id.
 */
const getAlbumCover = async (artistName, albumName) => {
    let artistId = await fetch(`http://musicbrainz.org/ws/2/artist/?query=${parsifyArtistParam(artistName)}&fmt=json`)
        .then(res => res.json()).catch(() => null);
    await sleep(1000); // Await sleep to not get blocked from api
    let foundArtist = artistId && artistId.artists && artistId.artists
        .find(artist => artist.name === artistName);

    if (!foundArtist) {
        foundArtist = artistId && artistId.artists && artistId.artists
            .find(artist => parsify(artist.name) === parsify(artistName));
    }

    if (foundArtist) {
        artistId = foundArtist.id;
    } else {
        artistId = null;
    }

    let releaseGroupId = await fetch(`http://musicbrainz.org/ws/2/artist/${artistId}?inc=release-groups&fmt=json`).then(res => res.json()).catch(() => null);
    await sleep(1000); // Await sleep to not get blocked from api
    let foundReleaseGroup = releaseGroupId && releaseGroupId['release-groups'] && releaseGroupId['release-groups']
        .find(releaseGroup => releaseGroup.title === albumName);

    if (!foundReleaseGroup) {
        foundReleaseGroup = releaseGroupId && releaseGroupId['release-groups'] && releaseGroupId['release-groups']
            .find(releaseGroup => parsify(releaseGroup.title) === parsify(albumName));
    }

    if (foundReleaseGroup) {
        releaseGroupId = foundReleaseGroup.id;
    } else {
        releaseGroupId = null;
    }

    const response = await fetch(`http://coverartarchive.org/release-group/${releaseGroupId}/front-250`);
    return response.url;
};

module.exports = {
    getAlbumCover,
};
