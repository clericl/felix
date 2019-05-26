import React from 'react';
import NewSessionHeader from './session/header';
import NewSessionMain from './session/main';
import Header from './main/header';
import Main from './main/main';
import { connect } from 'react-redux';
// import AuthRoute from '../util/route_util';

const App = props => {
    const { currentUser } = props;

    if (currentUser) {
        return (
            <>
                <Header />
                <Main />
            </>
        )
    } else {
        return (
            <>
                <NewSessionHeader />
                <NewSessionMain signupUser={props.signupUser} />
            </>
        )
    }
};

const msp = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
    }
};

export default connect(msp)(App);