// @flow
import React from 'react';
import AlbumWrapper from '../../ui/blocks/Album';
import AlbumFilterView from './album-filter/AlbumFilterView';
import SingleReview from './single-review/SingleReview';

type Props = {
    handleScoreClick: (score: number) => void,
    handleTextChange: (evt: any) => void,
    filteredReviews: Object[],
    fullscreen: Object,
    leaveFullscreen: Object,
    handleAlbumClick: (evt: any, reviewId: string) => void,
};

const AlbumReviewListView = ({
    handleScoreClick,
    handleTextChange,
    filteredReviews,
    fullscreen,
    leaveFullscreen,
    handleAlbumClick,
}: Props) => (
    <>
        <AlbumFilterView
            handleScoreClick={handleScoreClick}
            handleTextChange={handleTextChange}
        />
        <AlbumWrapper>
            {filteredReviews && filteredReviews.map(review => (
                <SingleReview
                    review={review}
                    fullscreen={fullscreen}
                    leaveFullscreen={leaveFullscreen}
                    handleAlbumClick={handleAlbumClick}
                />
            ))}
        </AlbumWrapper>
    </>
);

export default AlbumReviewListView;
