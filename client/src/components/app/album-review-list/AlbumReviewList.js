// @flow
import React, { useEffect, useState } from 'react';
import { sortNumber, sortFilteredList } from '../../../utils/arrays';
import { searchParameters } from '../../../utils/filterParameters';
import { textFilter, dateFilter, scoreFilter } from '../../../utils/reviewFilter';
import AlbumFilterView from './album-filter/AlbumFilterView';
import AlbumReviewListView from './AlbumReviewListView';
import SingleReviewFullscreen from './single-review-fullscreen/SingleReviewFullscreen';

type Props = {
    albumReviews: Object[],
    fetching: boolean,
    reviewYears: number[],
};

const initialState = {
    albumReviews: [],
    filteredReviews: [],
    fullscreen: '',
    leaveFullscreen: {
        id: '',
        x: 0,
        y: 0,
        originalPos: {},
    },
    activeFilters: {
        search: '',
        score: [],
        date: null,
    },
    fetching: true,
    foundResults: 0,
    sortBy: 'newest',
    filterBarActive: true,
    pagination: 2,
};

let lastScrollTop = 0;
const AlbumReviewList = ({ albumReviews, fetching, reviewYears }: Props) => {
    const [filteredReviews, setFilteredReviews] = useState(initialState.filteredReviews);
    const [fullscreen, setFullscreen] = useState(initialState.fullscreen);
    const [activeFilters, setActiveFilters] = useState(initialState.activeFilters);
    const [foundResults, setFoundResults] = useState(initialState.foundResults);
    const [sortBy, setSortBy] = useState(initialState.sortBy);
    const [filterBarActive, setFilterBarActive] = useState(initialState.sortBy);
    const [pagination, setPagination] = useState(initialState.pagination);

    /** Shared handler for when any of the filters' changes */
    const handleFilterChange = () => {
        window.scrollTo(0, 0);
        setPagination(initialState.pagination);
    };

    /**
     * Handles rating score click. Filter's out album review's that doesn't include given number.
     *
     * @param {number} score Score number that was clicked.
     */
    const handleScoreClick = (score: number) => {
        setActiveFilters({
            ...activeFilters,
            score: activeFilters.score.some(s => s === score)
                ? activeFilters.score.filter(s => s !== score).sort(sortNumber)
                : [...activeFilters.score, score].sort(sortNumber),
        });
        handleFilterChange();
    };

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
        handleFilterChange();
    };

    const handleTextReset = () => {
        setActiveFilters({
            ...activeFilters,
            search: initialState.activeFilters.search,
        });
    };

    /**
     * Handles date select change.
     *
     * @param {Object} date Selected date's value and label.
     */
    const handleDateChange = (date: Object) => {
        setActiveFilters({
            ...activeFilters,
            date: date
                ? {
                    ...date,
                    value: parseInt(date.value, 10),
                }
                : date,
        });
        handleFilterChange();
    };

    /**
     * Handle's album click. Transition album into fullscreen view.
     *
     * @param {Object} evt Click event. Contains data from click.
     * @param {string} id Album's unique Id.
     */
    const handleAlbumClick = (evt: Object, id: string) => {
        evt.persist();

        setFullscreen(id);
    };

    /** Toggles filter bar */
    const handleFilterToggleClick = () => {
        filterBarActive ? setFilterBarActive(false) : setFilterBarActive(true);
    };

    /** Reset's all filtering options on click */
    const resetFilters = () => setActiveFilters(initialState.activeFilters);

    /** Calls method for getting album reviews during first mount */
    useEffect(() => {
        setFoundResults(albumReviews.length);
        window.scrollTo(0, 0);

        // Event listener for header logo. Reset list back to initial state.
        window.document.getElementById('header__tndr-logo').addEventListener('click', () => {
            setActiveFilters({
                ...initialState.activeFilters,
            });
            setSortBy(initialState.sortBy);
        });

        setActiveFilters({
            ...activeFilters,
            search: searchParameters.searchText
                ? searchParameters.searchText.substring(0, 30)
                : activeFilters.search,
            score: searchParameters.score
                ? searchParameters.score.split(',')
                    .filter(s => ((s >= 0 && s <= 10) || s === '-'))
                    .map(s => (s === '-' ? null : parseInt(s, 10)))
                : activeFilters.score,
            date: searchParameters.searchDate && reviewYears
                .some(year => year === parseInt(searchParameters.searchDate, 10))
                ? {
                    value: parseInt(searchParameters.searchDate, 10),
                    label: parseInt(searchParameters.searchDate, 10),
                }
                : activeFilters.date,
        });

        const sortByList = ['newest', 'oldest', 'random'];
        setSortBy(searchParameters.sortBy && sortByList.some(sb => sb === searchParameters.sortBy)
            ? searchParameters.sortBy
            : initialState.sortBy);

    }, [reviewYears]); // eslint-disable-line

    /** Scoll listener for handling pagination and filter toggle */
    const scrollListener = () => {
        const paginationElemOnView = window.document.getElementById('bottom-pagination').getBoundingClientRect().top < window.innerHeight;
        if (paginationElemOnView) {
            setPagination(pagination + 1);
            filteredReviews.slice((pagination - 1) * 36, (pagination - 1) * 36 + 72);
        }

        if (window.innerWidth < 1000) {
            const st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                filteredReviews.length < pagination * 36 && paginationElemOnView
                    ? !filterBarActive && setFilterBarActive(false)
                    : filterBarActive && setFilterBarActive(false);
            } else {
                filteredReviews.length < pagination * 36 && paginationElemOnView
                    ? setFilterBarActive(true)
                    : !filterBarActive && setFilterBarActive(true);
            }

            lastScrollTop = st <= 0 ? 0 : st;
        } else {
            setFilterBarActive(true);
        }
    };

    const handleChangeSortBy = (sort: string) => {
        window.scrollTo(0, 0);
        setPagination(initialState.pagination);
        setSortBy(sort);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        };
    });

    /** Disable body scroll when fullscreen review active */
    useEffect(() => {
        fullscreen
            ? document.body.style.overflow = 'hidden'
            : document.body.style.overflow = 'auto';
    }, [fullscreen]);

    /** Sets the filtered list */
    useEffect(() => {
        const {
            search, score, date,
        } = activeFilters;

        const foundFilteredReviews = textFilter(albumReviews, search)
            .filter(review => dateFilter(review, date && date.value, reviewYears))
            .filter(review => scoreFilter(review, score));

        setFoundResults(foundFilteredReviews.length);
        setFilteredReviews(sortFilteredList(foundFilteredReviews, sortBy));

        window.scrollTo(0, 0);
    }, [activeFilters, sortBy, albumReviews, reviewYears]);

    /** Change url based on filters. */
    useEffect(() => {
        if (!fetching && reviewYears.length) {
            const score = activeFilters.score.length > 0
                ? `score=${activeFilters.score.map(s => (s === null ? '-' : s)).join(',')}`
                : null;

            const searchText = activeFilters.search.length > 0
                ? `searchText=${activeFilters.search}`
                : null;

            const searchDate = activeFilters.date !== null
                ? `searchDate=${activeFilters.date.value}`
                : null;

            const paramSortBy = `sortBy=${sortBy}`;

            const searchParams = [paramSortBy, score, searchText, searchDate];

            if (searchParams.filter(param => param !== null).length > 0) {
                const url = window.location.href;
                const urlSplit = url.split('?');
                const obj = { Title: '', Url: `${urlSplit[0]}?${searchParams.filter(param => param !== null).join('&')}` };
                window.history.pushState(obj, obj.Title, obj.Url);
            } else {
                const obj = { Title: '', Url: '/' };
                window.history.pushState(obj, obj.Title, obj.Url);
            }
        }
    }, [activeFilters, sortBy, fetching, reviewYears]);

    const pagedFilteredReviews = filteredReviews.slice(0, pagination * 36);

    return (
        <>
            <AlbumFilterView
                handleScoreClick={handleScoreClick}
                handleTextChange={handleTextChange}
                handleTextReset={handleTextReset}
                activeFilters={activeFilters}
                handleDateChange={handleDateChange}
                reviewYears={reviewYears}
                resetFilters={resetFilters}
                foundResults={foundResults}
                fetching={fetching}
                filterBarActive={filterBarActive}
                handleFilterToggleClick={handleFilterToggleClick}
                pagination={pagination}
                sortBy={sortBy}
                setSortBy={handleChangeSortBy}
            />
            <AlbumReviewListView
                handleAlbumClick={handleAlbumClick}
                filteredReviews={pagedFilteredReviews}
                fetching={fetching}
                filterBarActive={filterBarActive}
            />
            { fullscreen && (
                <SingleReviewFullscreen
                    review={filteredReviews.find(a => a._id === fullscreen)}
                    filteredReviews={filteredReviews}
                    setFullscreen={setFullscreen}
                />
            )}
        </>
    );
};

export default AlbumReviewList;
