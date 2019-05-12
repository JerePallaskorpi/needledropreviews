// @flow
import React from 'react';
import Filter from '../../../ui/blocks/Filter';
import DateSelectView from './date-select/DateSelectView';
import ResetFilterView from './reset-filter/ResetFilterView';
import ToggleFilterView from './toggle-filter/ToggleFilterView';
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
    resetFilters,
    foundResults,
    fetching,
    filterBarActive,
    handleFilterToggleClick,
}: Props) => (
    <Filter>
        <Filter.ActiveFilters>
            <div>
                {!fetching ? `${foundResults}` : '...'}
            </div>
            <div>
                <Filter.ActiveFilters.ResetFilters>
                    {!fetching && (
                        <ResetFilterView
                            activeFilters={activeFilters}
                            resetFilters={resetFilters}
                        />
                    )}
                </Filter.ActiveFilters.ResetFilters>
                <Filter.ActiveFilters.ToggleFilters>
                    <ToggleFilterView
                        filterBarActive={filterBarActive}
                        handleFilterToggleClick={handleFilterToggleClick}
                    />
                </Filter.ActiveFilters.ToggleFilters>
            </div>
        </Filter.ActiveFilters>
        <Filter.FilterOptions
            id="filterOptions"
            filterBarActive={filterBarActive}
        >
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
