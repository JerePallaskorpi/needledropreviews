/**
 * Creates headers for fetch calls.
 *
 * @returns {Object} Headers data.
 */
export const getHeaders = () => {
    const headers = new Headers();
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return headers;
};
