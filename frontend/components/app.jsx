import React from 'react';
import { Provider } from 'react-redux';
import Page from './page';

const App = ({ store }) => {
    return (
        <Provider store={store}>
            <Page />
        </Provider>
    )
};

export default App;