import { getHeaders } from './config';

// Placeholder until invalid host with proxy fixed
const url = window.location.href.includes('localhost')
    ? '/api/albums'
    : 'https://tndreviews-api.herokuapp.com/api/albums';

export const getAlbums = () => fetch('/api/albums', getHeaders())
    .then(res => res)
    .then(res => res.json());
