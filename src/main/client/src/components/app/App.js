// @flow
import React from 'react';
import { Provider } from 'react-redux';

const App = ({ store }: any) => (
    <Provider store={store}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias dolor exercitationem officia rem, voluptatibus.</p>
    </Provider>
);

export default App;
