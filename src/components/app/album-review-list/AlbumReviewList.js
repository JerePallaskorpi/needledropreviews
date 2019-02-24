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
        originalPos: {},
    },
    leaveFullscreen: {
        id: '',
        x: 0,
        y: 0,
        originalPos: {},
    },
};

const AlbumReviewList = () => {
    const [albumReviews, setAlbumReviews] = useState(initialState.albumReviews);
    const [filteredReviews, setFilteredReviews] = useState(initialState.filteredReviews);
    const [fullscreen, setFullscreen] = useState(initialState.fullscreen);
    const [leaveFullscreen, setLeaveFullscreen] = useState(initialState.leaveFullscreen);

    /** Gets the album reviews from backend */
    const getAlbumList = async () => getAlbums();

    /** Calls method for getting album reviews during first mount */
    useEffect(async () => {
        const albumReviewsRes = await getAlbumList();

        setAlbumReviews(albumReviewsRes);
        setFilteredReviews(shuffleArray(albumReviewsRes)
            .slice(0, 30));
    }, []);

    /**
     * Handles rating score click. Filter's out album review's that doesn't include given number.
     *
     * @param {number} rating Score number that was clicked.
     */
    const handleScoreClick = (rating: number) => setFilteredReviews(albumReviews
        .filter(a => a.details.rating === rating)
        .slice(0, 30));

    /**
     * Handles album search text change. Filter's out album review's that
     * doesn't include given text.
     *
     * @param {Object} evt Input's event. Contains written text as value.
     */
    const handleTextChange = (evt: Object) => {
        const text = evt.target.value;

        if (text.trim().length >= 2) {
            setFilteredReviews(textFilter(albumReviews, text));
        }
    };

    /**
     * Handle's album click. Transition album into fullscreen view.
     *
     * @param {Object} evt Click event. Contains data from click.
     * @param {string} id Album's unique Id.
     */
    const handleAlbumClick = (evt: Object, id: string) => {
        evt.persist();

        const originalPos = document.getElementById(`${id}_original`)
            ? document.getElementById(`${id}_original`).getBoundingClientRect()
            : document.getElementById(id).getBoundingClientRect();

        if (fullscreen.id === id) {
            setLeaveFullscreen({
                id, x: fullscreen.x, y: fullscreen.y, originalPos,
            });
            setFullscreen(initialState.fullscreen);

            setTimeout(() => {
                setLeaveFullscreen(initialState.leaveFullscreen);
                setFullscreen(initialState.fullscreen);
            }, 500);
        } else {
            setFullscreen({
                id, x: evt.clientX, y: evt.clientY, originalPos,
            });
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
