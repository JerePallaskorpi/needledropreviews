// @flow
import React from 'react';
import Filter from '../../../ui/blocks/Filter';
import DateSelectView from './date-select/DateSelectView';
import ScoreView from './score/ScoreView';
import SingleActiveFilter from './single-active-filter/SingleActiveFilter';
import TextSearchView from './text-search/TextSearchView';

type Props = {
    handleScoreClick: (score: number) => void,
    handleTextChange: (evt: Object) => void,
    handleDateChange: (evt: Object) => void,
    activeFilters: Object,
    reviewYears: string[],
    handleResetFilter: (filterName: string) => void,
};

const AlbumFilterView = ({
    handleScoreClick,
    handleTextChange,
    handleDateChange,
    activeFilters,
    reviewYears,
    handleResetFilter,
}: Props) => (
    <Filter>
        <Filter.ActiveFilters>
            <SingleActiveFilter title="" filters={activeFilters.score.join(', ')} handleResetFilter={() => handleResetFilter('score')} />
            <SingleActiveFilter title="" filters={activeFilters.search.trim()} handleResetFilter={() => handleResetFilter('search')} />
            <SingleActiveFilter title="" filters={activeFilters.date && activeFilters.date.toString()} handleResetFilter={() => handleResetFilter('date')} />
        </Filter.ActiveFilters>
        <Filter.Inputs>
            <TextSearchView handleTextChange={handleTextChange} search={activeFilters.search} />
            <DateSelectView
                handleDateChange={handleDateChange}
                date={activeFilters.date}
                reviewYears={reviewYears}
            />
        </Filter.Inputs>
        <ScoreView handleScoreClick={handleScoreClick} />
    </Filter>
);

export default AlbumFilterView;
