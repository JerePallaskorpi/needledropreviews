// @flow
import React from 'react';
import Filter from '../../../ui/blocks/Filter';
import DateSelectView from './date-select/DateSelectView';
import ScoreView from './score/ScoreView';
import SortMenuView from './sort-menu/SortMenuView';
import TextSearchView from './text-search/TextSearchView';

type Props = {
    handleScoreClick: (score: number) => void,
    handleTextChange: (evt: Object) => void,
    handleTextReset: () => void,
    handleDateChange: (evt: Object) => void,
    activeFilters: Object,
    reviewYears: string[],
    foundResults: number,
    fetching: boolean,
    filterBarActive: boolean,
    sortBy: string,
    setSortBy: (sortBy: string) => void,
};

const AlbumFilterView = ({
    handleScoreClick,
    handleTextChange,
    handleTextReset,
    handleDateChange,
    activeFilters,
    reviewYears,
    foundResults,
    fetching,
    filterBarActive,
    sortBy,
    setSortBy,
}: Props) => (
    <Filter filterBarActive={filterBarActive}>
        <Filter.Handlers>
            <Filter.Handlers.Score>
                <i className="fas fa-star" />
                <span>{!fetching ? `${foundResults}` : '...'}</span>
            </Filter.Handlers.Score>
            <SortMenuView sortBy={sortBy} setSortBy={setSortBy} />
        </Filter.Handlers>
        <Filter.FilterOptions id="filterOptions">
            <Filter.FilterOptions.Inputs>
                <TextSearchView
                    handleTextChange={handleTextChange}
                    handleTextReset={handleTextReset}
                    search={activeFilters.search}
                />
                <DateSelectView
                    handleDateChange={handleDateChange}
                    date={activeFilters.date}
                    reviewYears={reviewYears}
                />
            </Filter.FilterOptions.Inputs>
            <ScoreView handleScoreClick={handleScoreClick} activeFilters={activeFilters} />
        </Filter.FilterOptions>
    </Filter>
);

export default AlbumFilterView;
