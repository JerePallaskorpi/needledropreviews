// @flow
import React from 'react';
import { ratingDetails } from '../../../../../utils/rating';
import Filter from '../../../../ui/blocks/Filter';
import { Button } from '../../../../ui/elements/Button';

type Props = {
    handleScoreClick: (score: number) => void,
    activeFilters: Object,
};

const ScoreView = ({ handleScoreClick, activeFilters }: Props) => (
    <Filter.Score>
        {ratingDetails.map(rating => (
            <Button
                active={activeFilters.score.some(score => score === rating.score)}
                key={rating.score}
                style={{ background: rating.color, flex: 1 }}
                onClick={() => handleScoreClick(rating.score)}
            >
                {rating.score}
            </Button>
        )).reverse()}
    </Filter.Score>
);

export default ScoreView;
