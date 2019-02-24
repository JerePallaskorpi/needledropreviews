// @flow

/**
 * Filters album reviews that contain given text in artist or album name.
 *
 * @param {Object[]} albumReviews List of album reviews.
 * @param {string} text Search string.
 *
 * @returns {Object[]} Filtered album review list.
 */
export const textFilter = (albumReviews: Object[], text: string) => albumReviews
    .filter(a => a.details.artist.toLowerCase().trim()
        .includes(text.toLowerCase().trim())
        || (a.details.album.toLowerCase().trim()
            .includes(text.toLowerCase().trim()) && !a.details.album.toLowerCase().trim()
            .includes('self-titled')))
    .slice(0, 30);
