import { getHeaders } from './config';

// Placeholder until invalid host with proxy fixed
const url = window.location.href.includes('localhost')
    ? 'http://localhost:8888/api/albums'
    : 'https://tndreviews-api.herokuapp.com/api/albums';

export const getAlbums = () => fetch(url, getHeaders())
    .then(res => res)
    .then(res => res.json());
