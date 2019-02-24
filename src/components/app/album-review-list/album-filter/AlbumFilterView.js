// @flow
import React from 'react';
import Filter from '../../../ui/blocks/Filter';
import ScoreView from './score/ScoreView';
import SingleActiveFilter from './single-active-filter/SingleActiveFilter';
import TextSearchView from './text-search/TextSearchView';

type Props = {
    handleScoreClick: (score: number) => void,
    handleTextChange: (evt: any) => void,
    activeFilters: Object,
};

const AlbumFilterView = ({ handleScoreClick, handleTextChange, activeFilters }: Props) => (
    <Filter>
        <Filter.ActiveFilters>
            <SingleActiveFilter title="Ratings: " filters={activeFilters.score.join(' ')} />
            <SingleActiveFilter title="Search: " filters={activeFilters.search.trim()} />
        </Filter.ActiveFilters>
        <TextSearchView handleTextChange={handleTextChange} search={activeFilters.search} />
        <ScoreView handleScoreClick={handleScoreClick} />
    </Filter>
);

export default AlbumFilterView;
