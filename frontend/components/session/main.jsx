import React from 'react';
import NewUserForm from './new_user_form';

const Main = props => {
    return (
        <main className="session-main">
            <h2>Connect with friends and the world around you with felix.</h2>
            <NewUserForm />
        </main>
    )
};

export default Main;