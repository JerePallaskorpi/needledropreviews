// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from '../ui/defaultStyles';
import Home from './home/Home';

const App = ({ store }: any) => (
    <Provider store={store}>
        <GlobalStyle />
        <Home />
    </Provider>
);

export default App;
