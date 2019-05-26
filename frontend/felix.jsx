import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', e => {
    const root = document.getElementById("root");
    let store;

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: window.currentUser
            },
            session: {
                currentUser: window.currentUser
            }
        };
        store = configureStore(preloadedState);
    } else {
        store = configureStore();
    }

    window.getState = store.getState;

    ReactDOM.render(<Root store={store} />, root);
});