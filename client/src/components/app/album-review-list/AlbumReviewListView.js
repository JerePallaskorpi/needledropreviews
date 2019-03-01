// @flow
import React from 'react';
import { smallLogo } from '../../../utils/svg/logo';
import AlbumWrapper from '../../ui/blocks/Album';
import Header from '../../ui/blocks/Header';
import AlbumFilterView from './album-filter/AlbumFilterView';
import SingleReview from './single-review/SingleReview';

type Props = {
    handleScoreClick: (score: number) => void,
    handleTextChange: (evt: any) => void,
    filteredReviews: Object[],
    fullscreen: Object,
    leaveFullscreen: Object,
    handleAlbumClick: (evt: any, reviewId: string) => void,
    activeFilters: Object,
    handleLogoClick: () => void,
};

const AlbumReviewListView = ({
    handleScoreClick,
    handleTextChange,
    filteredReviews,
    fullscreen,
    leaveFullscreen,
    handleAlbumClick,
    activeFilters,
    handleLogoClick,
}: Props) => (
    <>
        <Header>
            {smallLogo(handleLogoClick)}
        </Header>
        <AlbumFilterView
            handleScoreClick={handleScoreClick}
            handleTextChange={handleTextChange}
            activeFilters={activeFilters}
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
