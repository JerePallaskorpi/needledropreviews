// @flow
import React, { useState, useEffect } from 'react';
import SingleReviewFullscreenView from './SingleReviewFullscreenView';

type Props = {
    review: Object,
};

const SingleReviewFullscreen = ({ review, filteredReviews, setFullscreen }: Props) => {
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

    const handleCloseFullscreen = () => {
        setFullscreen('');
    };

    const handleFullscreenNav = (direction) => {
        const index = filteredReviews.indexOf(filteredReviews.find(a => a._id === review._id));
        setFullscreen('');
        if (direction === 'next') {
            index === filteredReviews.length - 1
                ? setFullscreen(filteredReviews[0]._id)
                : setFullscreen(filteredReviews[index + 1]._id);
        } else {
            index === 0
                ? setFullscreen(filteredReviews[filteredReviews.length - 1]._id)
                : setFullscreen(filteredReviews[index - 1]._id);
        }
    };

    useEffect(() => {
        const descriptionSplit = review.description.split('\n');
        const summary = descriptionSplit.find(line => !line.includes('http')
            && !line.toLowerCase().includes('cymbal')
            && line.length > 10);
        const favTracks = [...new Set(splitTracks(descriptionSplit, 'fav', 3))];
        const leastFavTracks = [...new Set(splitTracks(descriptionSplit, 'least', 5))];

        setDescDetails({ summary, favTracks, leastFavTracks });
    }, [review]);

    return (
        <SingleReviewFullscreenView
            review={review}
            descDetails={descDetails}
            handleCloseFullscreen={handleCloseFullscreen}
            handleFullscreenNav={handleFullscreenNav}
        />
    );
};

export default SingleReviewFullscreen;
