// @flow
import React from 'react';
import SingleReviewView from './SingleReviewView';

type Props = {
    review: Object,
    handleAlbumClick: (evt: any, reviewId: string) => void,
};

const SingleReview = ({
    review, handleAlbumClick,
}: Props) => (
    <SingleReviewView
        review={review}
        handleAlbumClick={handleAlbumClick}
    />
);

export default SingleReview;
