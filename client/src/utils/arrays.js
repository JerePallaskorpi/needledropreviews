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
