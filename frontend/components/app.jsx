import React from 'react';
import SessionHeader from './session/header';
import SessionMain from './session/main';
import { signupUser } from '../actions/session_actions';
import { connect } from 'react-redux';

const App = props => {
    return (
        <>
            <SessionHeader />
            <SessionMain signupUser={props.signupUser} />
        </>
    )
};

const mdp = dispatch => {
    return {
        signupUser: user => dispatch(signupUser(user)),
    };
};

export default connect(null, mdp)(App);