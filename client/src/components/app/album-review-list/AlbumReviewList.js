// @flow
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import moment from 'moment';
import { getAlbums } from '../../../api/album';
import { shuffleArray, sortNumber } from '../../../utils/arrays';
import { textFilter, dateFilter, scoreFilter } from '../../../utils/reviewFilter';
import { themeLight } from '../../../utils/themes';
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
        date: '',
    },
    fetching: true,
    reviewYears: [],
};

const AlbumReviewList = () => {
    const [albumReviews, setAlbumReviews] = useState(initialState.albumReviews);
    const [filteredReviews, setFilteredReviews] = useState(initialState.filteredReviews);
    const [fullscreen, setFullscreen] = useState(initialState.fullscreen);
    const [leaveFullscreen, setLeaveFullscreen] = useState(initialState.leaveFullscreen);
    const [activeFilters, setActiveFilters] = useState(initialState.activeFilters);
    const [fetching, setFetching] = useState(initialState.fetching);
    const [theme] = useState(themeLight);
    const [reviewYears, setReviewYears] = useState(initialState.reviewYears);

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
     * Handles date select change.
     *
     * @param {Object} evt Select's event. Contains selected year or time range.
     */
    const handleDateChange = (evt: Object) => {
        const date = evt.target.value;
        setActiveFilters({
            ...activeFilters,
            date: parseInt(date, 10),
        });
    };

    const handleResetFilter = (filterName: string) => {
        setActiveFilters({
            ...activeFilters,
            [filterName]: initialState.activeFilters[filterName],
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

    /** Handles logo click. Reset's all filtering options */
    const handleLogoClick = () => setActiveFilters(initialState.activeFilters);

    /** Gets the album reviews from backend */
    const getAlbumList = async () => {
        const albumReviewsRes = await getAlbums();
        setFetching(false);
        setAlbumReviews(albumReviewsRes);
        setReviewYears([...new Set(albumReviewsRes.map(review => moment(review.date).year()))]);
        setFilteredReviews(shuffleArray(albumReviewsRes)
            .slice(0, 12));
    };

    /** Calls method for getting album reviews during first mount */
    useEffect(() => {
        getAlbumList();
    }, []);

    /** Disable body scroll when review fullscrened */
    useEffect(() => {
        fullscreen.id
            ? document.body.style.overflow = 'hidden'
            : document.body.style.overflow = 'auto';
    }, [fullscreen]);

    /** Sets the filtered list */
    useEffect(() => {
        const {
            search, score, date,
        } = activeFilters;

        setFilteredReviews(textFilter(shuffleArray(albumReviews), search)
            .filter(review => dateFilter(review, date, reviewYears))
            .filter(review => scoreFilter(review, score))
            .slice(0, 12));

        window.scrollTo(0, 0);
    }, [activeFilters]);

    return (
        <ThemeProvider theme={theme}>
            <AlbumReviewListView
                handleScoreClick={handleScoreClick}
                handleTextChange={handleTextChange}
                handleAlbumClick={handleAlbumClick}
                filteredReviews={filteredReviews}
                fullscreen={fullscreen}
                leaveFullscreen={leaveFullscreen}
                activeFilters={activeFilters}
                handleLogoClick={handleLogoClick}
                fetching={fetching}
                handleDateChange={handleDateChange}
                reviewYears={reviewYears}
                handleResetFilter={handleResetFilter}
            />
        </ThemeProvider>
    );
};

export default AlbumReviewList;
