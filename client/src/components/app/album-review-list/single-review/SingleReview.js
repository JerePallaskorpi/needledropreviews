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
    const [descDetails, setDescDetails] = useState({ summary: '', favTracks: [], leastFavTracks: [] });

    useEffect(() => {
        const descriptionSplit = review.description.split('\n');
        const summary = descriptionSplit
            .find(line => !line.includes('http') && line.length > 20);
        const favTracks = descriptionSplit
            .some(line => line.substring(0, 3).toLowerCase() === 'fav')
            && descriptionSplit
                .find(line => line.substring(0, 3).toLowerCase() === 'fav')
                .split(':')[1]
                .split(',')
                .map(favTrack => favTrack.toLowerCase());
        const leastFavTracks = descriptionSplit
            .some(line => line.substring(0, 5).toLowerCase() === 'least')
            && descriptionSplit
                .find(line => line.substring(0, 5).toLowerCase() === 'least')
                .split(':')[1]
                .split(',')
                .map(leastFavTrack => leastFavTrack.toLowerCase());

        setDescDetails({ summary, favTracks, leastFavTracks });
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
