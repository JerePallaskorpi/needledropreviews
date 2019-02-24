// @flow
import React, { useState, useEffect } from 'react';
import SingleReviewView from './SingleReviewView';

type Props = {
    review: Object,
    fullscreen: Object,
    leaveFullscreen: Object,
    handleAlbumClick: (evt: any, reviewId: string) => void,
};

const SingleReview = ({
    review, fullscreen, leaveFullscreen, handleAlbumClick,
}: Props) => {
    const [descDetails, setDescDetails] = useState({ description: '', favTracks: '', leastFavTracks: '' });

    useEffect(() => {
        const descriptionSplit = review.description.split('\n');

        setDescDetails({
            description: descriptionSplit
                .find(line => !line.includes('http') && line.length > 10),
            favTracks: descriptionSplit.find(line => line.substring(0, 3).toLowerCase() === 'fav'),
            leastFavTracks: descriptionSplit.find(line => line.substring(0, 5).toLowerCase() === 'least'),
        });
    }, [review]);

    return (
        <SingleReviewView
            review={review}
            fullscreen={fullscreen}
            leaveFullscreen={leaveFullscreen}
            handleAlbumClick={handleAlbumClick}
            descDetails={descDetails}
        />
    );
};

export default SingleReview;
