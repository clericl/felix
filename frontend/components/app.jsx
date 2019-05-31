import React from 'react';
import SplashHeader from './session/splash_header';
import NewUserMain from './session/new_user_main';
import LoginMain from './session/login_main'
import Header from './main/header/header';
import Main from './main/main';
import UserProfile from './main/user_profile/user_profile';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = props => {

    const { currentUser, sessionErrors } = props;

    if (currentUser) {
        // document.body.setAttribute("style", "background-color: #d3d6db;");
        return (
            <>
                <Header />
                <Route exact path="/" render={props => <Main {...props} />} />
                <Route path="/users/:userId" render={props => <UserProfile {...props} />} />
            </>
        )
    } else {
        // document.body.setAttribute("style", "background-color: #edf0f5;");
        return (
            <>
                <SplashHeader />
    
                <Route exact path="/" render={props => <NewUserMain {...props} />} />
                <Route exact path="/login" render={props => <LoginMain {...props} />} />
                <Route path="/users/:userId" render={props => <Redirect to="/login" /> } />
            </>
        )
    }
};

const msp = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        sessionErrors: state.errors.sessions,
    }
}; 

export default withRouter(connect(msp)(App));