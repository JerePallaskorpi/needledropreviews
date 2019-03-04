// @flow
import React from 'react';
import Filter from '../../../ui/blocks/Filter';
import DateSelectView from './date-select/DateSelectView';
import ResetFilterView from './reset-filter/ResetFilterView';
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
};

const AlbumFilterView = ({
    handleScoreClick,
    handleTextChange,
    handleDateChange,
    activeFilters,
    reviewYears,
    resetFilters,
    foundResults,
    fetching,
}: Props) => (
    <Filter>
        <Filter.ActiveFilters>
            <div>
                {!fetching ? `Results found: ${foundResults}` : '...'}
            </div>
            <Filter.ActiveFilters.ResetFilters>
                {!fetching && (
                    <ResetFilterView
                        activeFilters={activeFilters}
                        resetFilters={resetFilters}
                    />
                )}
            </Filter.ActiveFilters.ResetFilters>
        </Filter.ActiveFilters>
        <Filter.Inputs>
            <TextSearchView handleTextChange={handleTextChange} search={activeFilters.search} />
            <DateSelectView
                handleDateChange={handleDateChange}
                date={activeFilters.date}
                reviewYears={reviewYears}
            />
        </Filter.Inputs>
        <ScoreView handleScoreClick={handleScoreClick} activeFilters={activeFilters} />
    </Filter>
);

export default AlbumFilterView;
