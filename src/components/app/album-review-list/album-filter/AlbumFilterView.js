// @flow
import React from 'react';
import ScoreView from './score/ScoreView';
import TextSearchView from './text-search/TextSearchView';

type Props = {
    handleScoreClick: (score: number) => void,
    handleTextChange: (evt: any) => void,
};

const AlbumFilterView = ({ handleScoreClick, handleTextChange }: Props) => (
    <div>
        <ScoreView handleScoreClick={handleScoreClick} />
        <TextSearchView handleTextChange={handleTextChange} />
    </div>
);

export default AlbumFilterView;
