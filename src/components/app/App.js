// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from '../ui/defaultStyles';
import AlbumReviewList from './album-review-list/AlbumReviewList';

const App = ({ store }: any) => (
    <Provider store={store}>
        <GlobalStyle />
        <AlbumReviewList />
    </Provider>
);

export default App;
