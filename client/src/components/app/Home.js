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

const initialState = {
    reviewYears: [],
};

const Home = () => {
    const [albumReviews, setAlbumReviews] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [reviewYears, setReviewYears] = useState(initialState.reviewYears);
    const [theme] = useState(themeLight);
    const [activeNav] = useState('reviewList');

    /** Gets the album reviews from backend */
    const getAlbumList = async () => {
        const albumReviewsRes = await getAlbums();
        setFetching(false);
        setAlbumReviews(albumReviewsRes);
        setReviewYears([...new Set(albumReviewsRes
            .map(review => moment(review.date).year()))]
            .sort((a, b) => b - a));
    };

    /** Disable body scroll when fullscreen review active */
    useEffect(() => {
        fetching
            ? document.body.style.overflow = 'hidden'
            : document.body.style.overflow = 'auto';
    }, [fetching]);

    /** Calls method for getting album reviews during first mount */
    useEffect(() => {
        getAlbumList();
    }, []); // eslint-disable-line

    return (
        <ThemeProvider theme={theme}>
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
            </Header>
            { activeNav === 'reviewList' && <AlbumReviewList albumReviews={albumReviews} fetching={fetching} reviewYears={reviewYears} />}
        </ThemeProvider>
    );
};

export default Home;
