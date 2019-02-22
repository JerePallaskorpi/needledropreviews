// @flow
import React, { useEffect, useState } from 'react';
import { getAlbums } from '../../../api/album';
import { shuffleArray } from '../../../utils/arrays';
import { textFilter } from '../../../utils/reviewFilter';
import AlbumReviewListView from './AlbumReviewListView';

const initialState = {
    albumReviews: [],
    filteredReviews: [],
    fullscreen: {
        id: '',
        x: 0,
        y: 0,
    },
    leaveFullscreen: {
        id: '',
        x: 0,
        y: 0,
    },
};

const AlbumReviewList = () => {
    const [albumReviews, setAlbumReviews] = useState([]);
    const [filteredReviews, setFilteredReviews] = useState([]);
    const [fullscreen, setFullscreen] = useState({ id: '', x: 0, y: 0 });
    const [leaveFullscreen, setLeaveFullscreen] = useState({ id: '', x: 0, y: 0 });

    const getAlbumList = async () => getAlbums();

    // cDM
    useEffect(async () => {
        const albumReviewsRes = await getAlbumList();
        setAlbumReviews(albumReviewsRes);
        setFilteredReviews(shuffleArray(albumReviewsRes).slice(0, 30));
    }, []);

    const handleScoreClick = (rating: number) => setFilteredReviews(shuffleArray(albumReviews
        .filter(a => a.details.rating === rating))
        .slice(0, 30));

    const handleTextChange = (evt: string) => {
        const text = evt.target.value;

        if (text.trim().length >= 2) {
            setFilteredReviews(textFilter(albumReviews, text));
        }
    };

    const handleAlbumClick = (e, id: string) => {
        e.persist();

        if (fullscreen.id === id) {
            setLeaveFullscreen({ id, x: fullscreen.x, y: fullscreen.y });
            setFullscreen(initialState.fullscreen);

            setTimeout(() => {
                setLeaveFullscreen(initialState.leaveFullscreen);
                setFullscreen(initialState.fullscreen);
            }, 500);
        } else {
            setFullscreen({ id, x: e.clientX, y: e.clientY });
        }
    };

    return (
        <AlbumReviewListView
            handleScoreClick={handleScoreClick}
            handleTextChange={handleTextChange}
            handleAlbumClick={handleAlbumClick}
            filteredReviews={filteredReviews}
            fullscreen={fullscreen}
            leaveFullscreen={leaveFullscreen}
        />
    );
};

export default AlbumReviewList;
