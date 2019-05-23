import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', e => {
    const store = configureStore();
    
    ReactDOM.render(
        <App store={store} />,
        document.getElementById("root")
    )
});