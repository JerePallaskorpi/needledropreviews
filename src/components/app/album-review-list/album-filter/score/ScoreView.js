// @flow
import React from 'react';
import { ratingDetails } from '../../../../../utils/rating';
import { Button } from '../../../../ui/elements/Button';

type Props = {
    handleScoreClick: (score: number) => void,
};

const ScoreView = ({ handleScoreClick }: Props) => (
    <div style={{
        padding: '0.5rem', marginTop: '0.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap',
    }}
    >
        {ratingDetails.map(rating => (
            <Button
                style={{ background: rating.color, flex: 1 }}
                onClick={() => handleScoreClick(rating.score)}
            >
                {rating.score}
            </Button>
        )).reverse()}
    </div>
);

export default ScoreView;
