import React from 'react';
import NewUserMain from './session/new_user_main';
import LoginMain from './session/login_main';
import SignupMain from './session/signup_main';
import Header from './main/header/header';
import Main from './main/main';
import UserProfile from './main/user_profile/user_profile';
import Modal from './modal';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
// import { AuthRoute } from '../util/route_util';

const App = props => {

    const { currentUser, sessionErrors } = props;

    if (currentUser) {
        return (
            <>
                <Modal />
                <Header />
                <Route exact path="/" render={props => <Main {...props} />} />
                <Route path="/users/:userId" render={props => <UserProfile {...props} />} />
            </>
        )
    } else {
        return (
            <>
                <Route exact path="/" render={props => <NewUserMain {...props} />} />
                <Route exact path="/login" render={props => <LoginMain {...props} />} />
                <Route exact path="/signup" render={props => <SignupMain {...props} />} />
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