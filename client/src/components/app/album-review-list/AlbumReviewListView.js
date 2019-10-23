// @flow
import React from 'react';
import AlbumWrapper from '../../ui/blocks/Album';
import SingleReview from './single-review/SingleReview';

type Props = {
    filteredReviews: Object[],
    handleAlbumClick: (evt: Object, reviewId: string) => void,
    fetching: boolean,
    filterBarActive: boolean,
};

const AlbumReviewListView = ({
    filteredReviews,
    handleAlbumClick,
    fetching,
    filterBarActive,
}: Props) => (
    <>
        <AlbumWrapper filterBarActive={filterBarActive}>
            {filteredReviews.map(review => (
                <SingleReview
                    key={review._id}
                    review={review}
                    handleAlbumClick={handleAlbumClick}
                />
            ))}
            <div id="bottom-pagination" />
            {fetching && Array.from({ length: 36 }).map((a, index) => (
                <SingleReview
                    key={index} //eslint-disable-line
                    review={{ _id: 0, description: '', details: { rating: '-', artist: '', album: '' } }}
                    handleAlbumClick={handleAlbumClick}
                />
            ))}
        </AlbumWrapper>
    </>
);

export default AlbumReviewListView;
