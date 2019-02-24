// @flow
import React, { useEffect, useState } from 'react';
import { getAlbums } from '../../../api/album';
import { shuffleArray, sortNumber } from '../../../utils/arrays';
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
    activeFilters: {
        search: '',
        score: [],
        time: null,
    },
};

const AlbumReviewList = () => {
    const [albumReviews, setAlbumReviews] = useState(initialState.albumReviews);
    const [filteredReviews, setFilteredReviews] = useState(initialState.filteredReviews);
    const [fullscreen, setFullscreen] = useState(initialState.fullscreen);
    const [leaveFullscreen, setLeaveFullscreen] = useState(initialState.leaveFullscreen);
    const [activeFilters, setActiveFilters] = useState(initialState.activeFilters);

    /** Gets the album reviews from backend */
    const getAlbumList = async () => getAlbums();

    /**
     * Handles rating score click. Filter's out album review's that doesn't include given number.
     *
     * @param {number} score Score number that was clicked.
     */
    const handleScoreClick = (score: number) => setActiveFilters({
        ...activeFilters,
        score: activeFilters.score.some(s => s === score)
            ? activeFilters.score.filter(s => s !== score).sort(sortNumber)
            : [...activeFilters.score, score].sort(sortNumber),
    });

    /**
     * Handles album search text change. Filter's out album review's that
     * doesn't include given text.
     *
     * @param {Object} evt Input's event. Contains written text as value.
     */
    const handleTextChange = (evt: Object) => {
        const search = evt.target.value;
        setActiveFilters({
            ...activeFilters,
            search,
        });
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

    const handleLogoClick = () => setActiveFilters(initialState.activeFilters);

    /** Calls method for getting album reviews during first mount */
    useEffect(async () => {
        const albumReviewsRes = await getAlbumList();

        setAlbumReviews(albumReviewsRes);
        setFilteredReviews(shuffleArray(albumReviewsRes)
            .slice(0, 30));
    }, []);

    /** Disable body scroll when review fullscrened */
    useEffect(() => {
        fullscreen.id
            ? document.body.style.overflow = 'hidden'
            : document.body.style.overflow = 'auto';
    }, [fullscreen]);

    /** Sets the filtered list */
    useEffect(() => {
        const { search, score } = activeFilters;

        setFilteredReviews(textFilter(albumReviews, search)
            .filter(a => (score.length ? score.some(s => s === a.details.rating) : a))
            .slice(0, 30));
    }, [activeFilters]);

    return (
        <AlbumReviewListView
            handleScoreClick={handleScoreClick}
            handleTextChange={handleTextChange}
            handleAlbumClick={handleAlbumClick}
            filteredReviews={filteredReviews}
            fullscreen={fullscreen}
            leaveFullscreen={leaveFullscreen}
            activeFilters={activeFilters}
            handleLogoClick={handleLogoClick}
        />
    );
};

export default AlbumReviewList;
