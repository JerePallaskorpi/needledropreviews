// @flow
import React from 'react';
import { ratingDetails } from '../../../../../utils/rating';
import Filter from '../../../../ui/blocks/Filter';
import { Button } from '../../../../ui/elements/Button';

type Props = {
    handleScoreClick: (score: number) => void,
};

const ScoreView = ({ handleScoreClick }: Props) => (
    <Filter.Score>
        {ratingDetails.map(rating => (
            <Button
                style={{ background: rating.color, flex: 1 }}
                onClick={() => handleScoreClick(rating.score)}
            >
                {rating.score}
            </Button>
        )).reverse()}
    </Filter.Score>
);

export default ScoreView;
