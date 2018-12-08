export const getAlbums = () => fetch('/api/albums')
    .then(res => res)
    .then(res => res.json());
