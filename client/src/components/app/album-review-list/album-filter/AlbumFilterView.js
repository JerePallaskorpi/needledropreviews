// @flow
import React from 'react';
import Filter from '../../../ui/blocks/Filter';
import DateSelectView from './date-select/DateSelectView';
import ScoreView from './score/ScoreView';
import TextSearchView from './text-search/TextSearchView';

type Props = {
    handleScoreClick: (score: number) => void,
    handleTextChange: (evt: Object) => void,
    handleDateChange: (evt: Object) => void,
    activeFilters: Object,
    reviewYears: string[],
    resetFilters: () => void,
    foundResults: number,
    fetching: boolean,
    filterBarActive: boolean,
    handleFilterToggleClick: () => void,
};

const AlbumFilterView = ({
    handleScoreClick,
    handleTextChange,
    handleDateChange,
    activeFilters,
    reviewYears,
    foundResults,
    fetching,
    filterBarActive,
}: Props) => (
    <Filter filterBarActive={filterBarActive}>
        <Filter.Handlers>
            <div>{!fetching ? `${foundResults}` : '...'}</div>
        </Filter.Handlers>
        <Filter.FilterOptions id="filterOptions">
            <Filter.FilterOptions.Inputs>
                <TextSearchView handleTextChange={handleTextChange} search={activeFilters.search} />
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
