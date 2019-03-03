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

    /**
     * Split's tracks from description into a list.
     *
     * @param {string[]} descriptionSplit Review's description splitted.
     * @param {string} text Text to be found in description.
     * @param {number} letters Length of text to be found.
     *
     * @returns {string[]} List of tracks.
     */
    const splitTracks = (descriptionSplit, text, letters) => {
        const tracks = descriptionSplit
            .some(line => line.substring(0, letters).toLowerCase() === text)
        && descriptionSplit
            .find(line => line.substring(0, letters).toLowerCase() === text)
            .split(':')[1];

        if (tracks) {
            if (tracks.split(';').length > tracks.split(',').length) {
                return tracks.split(';').map(track => track.toLowerCase().trim());
            }
            return tracks.split(',').map(track => track.toLowerCase().trim());
        }
        return [];
    };

    useEffect(() => {
        const descriptionSplit = review.description.split('\n');
        const summary = descriptionSplit.find(line => !line.includes('http') && line.length > 10);
        const favTracks = splitTracks(descriptionSplit, 'fav', 3);
        const leastFavTracks = splitTracks(descriptionSplit, 'least', 5);

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
