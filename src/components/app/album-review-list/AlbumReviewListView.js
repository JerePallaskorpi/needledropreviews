// @flow
import React from 'react';
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
            <svg onClick={handleLogoClick} width="93" height="39" viewBox="0 0 93 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37 5C37 2.23858 39.2386 0 42 0H83C88.5229 0 93 4.47715 93 10V34C93 36.7614 90.7614 39 88 39H42C39.2386 39 37 36.7614 37 34V5Z" fill="#DB2736" />
                {' '}
                <path d="M78.2328 20.8232H75.227V26H73.5307V13.2031H77.767C79.2084 13.2031 80.3158 13.5312 81.0893 14.1875C81.8686 14.8438 82.2582 15.7988 82.2582 17.0527C82.2582 17.8496 82.0414 18.5439 81.6078 19.1357C81.1801 19.7275 80.5824 20.1699 79.8148 20.4629L82.8207 25.8945V26H81.0102L78.2328 20.8232ZM75.227 19.4434H77.8197C78.6576 19.4434 79.3227 19.2266 79.8148 18.793C80.3129 18.3594 80.5619 17.7793 80.5619 17.0527C80.5619 16.2617 80.3246 15.6553 79.85 15.2334C79.3813 14.8115 78.7016 14.5977 77.8109 14.5918H75.227V19.4434Z" fill="white" />
                {' '}
                <path d="M0 5C0 2.23858 2.23858 0 5 0H44C55.0457 0 64 8.95431 64 20V39H10C4.47715 39 0 34.5228 0 29V5Z" fill="#FDF18B" />
                {' '}
                <path d="M21.9348 14.5918H17.8215V26H16.1428V14.5918H12.0383V13.2031H21.9348V14.5918ZM35.4682 26H33.7719L27.3295 16.1387V26H25.6332V13.2031H27.3295L33.7895 23.1084V13.2031H35.4682V26ZM40.2652 26V13.2031H43.8775C44.9908 13.2031 45.9752 13.4492 46.8307 13.9414C47.6861 14.4336 48.3453 15.1338 48.8082 16.042C49.277 16.9502 49.5143 17.9932 49.5201 19.1709V19.9883C49.5201 21.1953 49.2857 22.2529 48.817 23.1611C48.3541 24.0693 47.6891 24.7666 46.8219 25.2529C45.9605 25.7393 44.9557 25.9883 43.8072 26H40.2652ZM41.9527 14.5918V24.6201H43.7281C45.0289 24.6201 46.0396 24.2158 46.7604 23.4072C47.4869 22.5986 47.8502 21.4473 47.8502 19.9531V19.2061C47.8502 17.7529 47.5074 16.625 46.8219 15.8223C46.1422 15.0137 45.1754 14.6035 43.9215 14.5918H41.9527Z" fill="#444444" />
                {' '}
            </svg>
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
