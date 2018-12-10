export const textFilter = (albumReviews, text) => albumReviews
    .filter(a => a.details.artist.toLowerCase().includes(text.toLowerCase())
            || (a.details.album.toLowerCase().includes(text.toLowerCase()) && !a.details.album.toLowerCase().includes('self-titled'))).slice(0, 30);
