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
    sortBy: string,
    filterBarActive: boolean,
    handleFilterToggleClick: () => void,
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
    sortBy,
    filterBarActive,
    handleFilterToggleClick,
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
            <Header.Sort
                fullscreen={fullscreen.id}
                onClick={!fullscreen.id ? handleRandomizeClick : () => {}}
                active={sortBy === 'random'}
            >
                <div>
                    <i className="fas fa-random" />
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
            filterBarActive={filterBarActive}
            handleFilterToggleClick={handleFilterToggleClick}
        />
        <AlbumWrapper filterBarActive={filterBarActive}>
            {filteredReviews && filteredReviews.map(review => (
                <SingleReview
                    key={review._id}
                    review={review}
                    fullscreen={fullscreen}
                    leaveFullscreen={leaveFullscreen}
                    handleAlbumClick={handleAlbumClick}
                />
            ))}
            {fetching && Array.from({ length: 36 }).map((a, index) => (
                <SingleReview
                    key={index} //eslint-disable-line
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
