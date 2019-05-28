import React from 'react';
import SplashHeader from './session/splash_header';
import NewUserMain from './session/new_user_main';
import LoginMain from './session/login_main'
import Header from './main/header';
import Main from './main/main';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
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
                <SplashHeader />
                <Route exact path="/" render={props => <NewUserMain {...props} />} />
                <Route exact path="/login" render={props => <LoginMain {...props} />} />
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