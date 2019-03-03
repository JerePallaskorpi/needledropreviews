// @flow
import moment from 'moment';

/**
 * Filters album reviews that contain given text in artist or album name.
 *
 * @param {Object[]} albumReviews List of album reviews.
 * @param {string} text Search string.
 *
 * @returns {Object[]} Filtered album review list.
 */
export const textFilter = (albumReviews: Object[], text: string) => {
    if (text.trim().length) {
        return albumReviews
            .filter(a => a.details.artist.toLowerCase().trim()
                .includes(text.toLowerCase().trim())
                || (a.details.album.toLowerCase().trim()
                    .includes(text.toLowerCase().trim()) && !a.details.album.toLowerCase().trim()
                    .includes('self-titled')));
    }

    return albumReviews;
};

export const dateFilter = (review: Object, date: number, reviewYears: number[]) => {
    if (date && reviewYears.some(year => year === date)) {
        return moment(review.date).year() === date;
    }
    return true;
};

export const scoreFilter = (review: Object, score: number) => {
    if (score.length) {
        return score.some(s => s === review.details.rating);
    }

    return true;
};
