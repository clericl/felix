import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// document.addEventListener('DOMContentLoaded', e => {
//     const store = configureStore();
// 
// 
//     
//     ReactDOM.render(
//         <App store={store} />,
//         document.getElementById("root")
//     )
// });

document.addEventListener('DOMContentLoaded', e => {
    let store;

    if (window.currentUser) {
        
        const { currentUser } = window;
        const { id } = currentUser;

        const preloadedState = {
            entities: {
                users: {
                    [id]: currentUser,
                },
            },
            session: { id },
        };

        store = configureStore(preloadedState);

        // Clean up after ourselves so we don't accidentally use the
        // global currentUser instead of the one in the store
        delete window.currentUser;

    } else {
        store = configureStore();
    }

    ReactDOM.render(
        <Root store={store} />,
        document.getElementById("root")
    )

    window.store = store;
});