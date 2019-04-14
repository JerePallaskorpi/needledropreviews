const albumScores = ['10/10', '9/10', '8/10', '7/10', '6/10', '5/10', '4/10', '3/10', '2/10', '1/10', '0/10'];
const replaceStrings = ['(MIXTAPE, REALLY)', 'EP / MIXTAPE /', 'MIXTAPE OR'];
const customRatings = [];

/**
 * Parse rating from the description. Some ratings cannot be parsed from description
 * so they need to be hardcoded to customRatings array.
 *
 * @param {string} description Description for the video.
 * @param {string} title Title for the video.
 *
 * @returns {number | null} Rating for the album or null if parse fails to find any.
 */
const parseRating = (description, title) => {
    const customRating = customRatings.some(cr => cr.title === title);
    if (customRating) return customRatings.find(cr => cr.title === title).rating;

    const lines = description.split('\n');
    const hasRating = lines.some(line => albumScores
        .some(score => line.substring(0, 5).includes(score)));
    if (hasRating) {
        const rating = lines.find(line => albumScores
            .some(score => line.substring(0, 5).includes(score)));
        return parseInt(rating, 10);
    }

    return null;
};

/**
 * Parse artist name from the title.
 *
 * @param {string} title Title for the video.
 * @returns {string} Parsed artist name.
 */
const parseArtist = title => title
    .split(/album review/ig)[0]
    .split('- ')[0]
    .trim();

/**
 * Parse album name from the title. Removes some unwanted hardcoded strings.
 * If album name is self-titled, return artist name instead.
 *
 * @param {string} title Title for the video.
 *
 * @returns {string} Parsed album name.
 */
const parseAlbum = (title) => {
    let album = title
        .split(/album review/ig)[0]
        .replace(title.split('- ')[0], '')
        .substring(1).trim();

    const textToReplace = replaceStrings.find(string => album.includes(string));
    if (textToReplace) album = album.replace(textToReplace, '');
    if (album.toLowerCase().includes('self-titled')) return parseArtist(title);
    return album;
};

/**
 * Filter and parse all album reviews from the playlist videos.
 *
 * Flattens the list.
 * Filters all videos that should be album reviews and include artist / album separator.
 * Parses details from title and description.
 * Removes duplicate values and filter values with valid rating.
 *
 * @param {Object[]} playlistItems List of playlist item results.
 *
 * @returns {Object[]} Filtered and parsed playlist videos.
 */
const filterAlbumReviews = playlistItems => [].concat(...playlistItems)
    .filter(item => item.snippet.title.toLowerCase()
        .includes('album review') && item.snippet.title.includes('- '))
    .map(item => ({
        title: item.snippet.title,
        description: item.snippet.description,
        date: item.snippet.publishedAt,
        thumbnail: item.snippet.thumbnails.default.url,
        videoId: item.contentDetails.videoId,
        details: {
            artist: parseArtist(item.snippet.title),
            album: parseAlbum(item.snippet.title),
            rating: parseRating(item.snippet.description, item.snippet.title),
            albumCover: '',
        },
    }))
    .reduce((x, y) => (x.findIndex(e => e.title === y.title) < 0 ? [...x, y] : x), [])
    .filter(item => item.details.rating !== null);

module.exports = {
    filterAlbumReviews,
};
