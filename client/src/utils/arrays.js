// @flow

/**
 * Randomizes items in array.
 *
 * @param {any[]} arr List to be randomized.
 *
 * @returns {any[]} Randomized array.
 */
export const shuffleArray = arr => arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);

/** Sorts array by number values */
export const sortNumber = (a, b) => a - b;

/**
 * Sorts album list with selected sorting method.
 *
 * @param {Object[]} reviewList List of reviews to be sorted.
 * @param {string} sortBy Order to sort by.
 *
 * @returns {Object[]} Sorted review list.
 */
export const sortFilteredList = (reviewList: Object[], sortBy: string) => {
    switch (sortBy) {
        case 'newest':
            return reviewList.sort((a, b) => new Date(b.date) - new Date(a.date));
        case 'oldest':
            return reviewList.sort((a, b) => new Date(a.date) - new Date(b.date));
        case 'random':
            return shuffleArray(reviewList);
        default:
            return reviewList;
    }
};
