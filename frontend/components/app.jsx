import React from 'react';
import SessionHeader from './session/header';
import SessionMain from './session/main';

const App = props => {
    return (
        <>
            <SessionHeader />
            <SessionMain />
        </>
    )
};

export default App;