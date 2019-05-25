import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', e => {
    const store = configureStore();

    ReactDOM.render(
        <Root store={store} />,
        document.getElementById("root")
    )
});