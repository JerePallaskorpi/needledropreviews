import { getHeaders } from './config';

/** Fetches all the album reviews from the API. */
export const getAlbums = () => fetch('/api/albums', getHeaders())
    .then(res => res)
    .then(res => res.json());
