// @flow
import React from 'react';
import { smallLogo } from '../../../utils/svg/logo';
import AlbumWrapper from '../../ui/blocks/Album';
import Header from '../../ui/blocks/Header';
import { LoadingIcon } from '../../ui/elements/LoadingIcon';
import { FullscreenBlock } from '../../ui/elements/FullscreenBlock';
import AlbumFilterView from './album-filter/AlbumFilterView';
import SingleReview from './single-review/SingleReview';

type Props = {
    handleScoreClick: (score: number) => void,
    handleTextChange: (evt: Object) => void,
    filteredReviews: Object[],
    fullscreen: Object,
    leaveFullscreen: Object,
    handleAlbumClick: (evt: Object, reviewId: string) => void,
    activeFilters: Object,
    resetFilters: () => void,
    fetching: boolean,
    handleDateChange: (evt: Object) => void,
    reviewYears: string[],
    foundResults: number,
    handleRandomizeClick: () => void,
};

const AlbumReviewListView = ({
    handleScoreClick,
    handleTextChange,
    filteredReviews,
    fullscreen,
    leaveFullscreen,
    handleAlbumClick,
    activeFilters,
    resetFilters,
    fetching,
    handleDateChange,
    reviewYears,
    foundResults,
    handleRandomizeClick,
}: Props) => (
    <>
        {fetching && (
            <FullscreenBlock>
                <LoadingIcon>
                    <div />
                    <div />
                    <div />
                    <div />
                </LoadingIcon>
            </FullscreenBlock>
        )}
        <Header>
            <Header.Logo>
                {smallLogo(() => {})}
            </Header.Logo>
            <Header.Sort onClick={handleRandomizeClick}>
                <div>
                    <span>Random</span>
                    <i className="fas fa-dice" />
                </div>
            </Header.Sort>
        </Header>
        <AlbumFilterView
            handleScoreClick={handleScoreClick}
            handleTextChange={handleTextChange}
            activeFilters={activeFilters}
            handleDateChange={handleDateChange}
            reviewYears={reviewYears}
            resetFilters={resetFilters}
            foundResults={foundResults}
            fetching={fetching}
        />
        <AlbumWrapper>
            {filteredReviews && filteredReviews.map(review => (
                <SingleReview
                    key={review._id}
                    review={review}
                    fullscreen={fullscreen}
                    leaveFullscreen={leaveFullscreen}
                    handleAlbumClick={handleAlbumClick}
                />
            ))}
            {fetching && Array.from({ length: 36 }).map(() => (
                <SingleReview
                    review={{ _id: 0, description: '', details: { rating: '-', artist: '', album: '' } }}
                    fullscreen={fullscreen}
                    leaveFullscreen={leaveFullscreen}
                    handleAlbumClick={handleAlbumClick}
                />
            ))}
        </AlbumWrapper>
    </>
);

export default AlbumReviewListView;
