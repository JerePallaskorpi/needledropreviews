// @flow
import React from 'react';
import { ratingDetails } from '../../../../../utils/rating';
import Filter from '../../../../ui/blocks/Filter';
import { ButtonScore } from '../../../../ui/elements/ButtonScore';

type Props = {
    handleScoreClick: (score: number) => void,
    activeFilters: Object,
};

const ScoreView = ({ handleScoreClick, activeFilters }: Props) => (
    <Filter.Score>
        {ratingDetails.map(rating => (
            <ButtonScore
                active={activeFilters.score.some(score => score === rating.score)}
                rating={rating.score}
                key={rating.score}
                onClick={() => handleScoreClick(rating.score)}
            >
                {rating.score}
            </ButtonScore>
        )).reverse()}
    </Filter.Score>
);

export default ScoreView;
