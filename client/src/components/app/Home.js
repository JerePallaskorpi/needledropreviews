import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { getAlbums } from '../../api/album';
import { smallLogo } from '../../utils/svg/logo';
import { themeLight } from '../../utils/themes';
import Header from '../ui/blocks/Header';
import { FullscreenBlock } from '../ui/elements/FullscreenBlock';
import { LoadingIcon } from '../ui/elements/LoadingIcon';
import AlbumReviewList from './album-review-list/AlbumReviewList';
import YearRatingChart from './chart/victoryChart';

const Home = () => {
    const [albumReviews, setAlbumReviews] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [theme] = useState(themeLight);
    const [activeNav, setActiveNav] = useState('reviewList');
    const [reviewYears, setReviewYears] = useState([]);

    /** Gets the album reviews from backend */
    const getAlbumList = async () => {
        const albumReviewsRes = await getAlbums();
        setFetching(false);
        setReviewYears([...new Set(albumReviewsRes
            .map(review => moment(review.date).year()))]
            .sort((a, b) => b - a));
        setAlbumReviews(albumReviewsRes);
    };

    /** Calls method for getting album reviews during first mount */
    useEffect(() => {
        getAlbumList();
    }, []);

    console.log(albumReviews.filter(review => moment(review.date).year() === 2019));

    return (
        <ThemeProvider theme={theme}>
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
                {/* <Header.Sort */}
                {/* fullscreen={fullscreen.id} */}
                {/* onClick={!fullscreen.id ? handleRandomizeClick : () => {}} */}
                {/* active={sortBy === 'random'} */}
                {/* > */}
                {/* <div> */}
                {/* <i className="fas fa-random" /> */}
                {/* </div> */}
                {/* </Header.Sort>                  */}
                <Header.Sort>
                    <div onClick={() => setActiveNav('reviewList')}>
                        <i className="fas fa-list-ol" />
                    </div>
                    <div onClick={() => setActiveNav('stats')}>
                        <i className="fas fa-chart-bar" />
                    </div>
                </Header.Sort>
            </Header>
                { activeNav === 'reviewList' && <AlbumReviewList albumReviews={albumReviews} />}
                { activeNav === 'stats' && (
                    <YearRatingChart
                        albumReviews={albumReviews}
                        reviewYears={reviewYears}
                    />
                )}
            </>
        </ThemeProvider>
    );
};

export default Home;
