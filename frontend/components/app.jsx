import React from 'react';
import NewUserMain from './main/new_user_main/new_user_main';
import LoginMain from './login/login';
import SignupMain from './signup/signup';
import Header from './header/header';
import Main from './main/main';
import UserProfile from './main/user_profile/user_profile';
import Modal from './modal';
import Search from './main/search/search';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';

const App = props => {
    
    if (props.currentUser) {
        return (
            <>
                <Modal />
                <Header />
                <Route exact path="/" render={props => <Main {...props} />} />
                <Route exact path="/search" render={props => <Search {...props} />} />
                <ProtectedRoute exact path="/login" render={props => <LoginMain {...props} />} />
                <ProtectedRoute exact path="/signup" render={props => <SignupMain {...props} />} />
                <Route path="/users/:userId" render={props => <UserProfile {...props} />} />
            </>
        )
    } else {
        return (
            <>
                <Header />
                <Route exact path="/" render={props => <NewUserMain {...props} />} />
                <Route exact path="/search" render={props => <Redirect to="/" />} />
                <Route exact path="/login" render={props => <LoginMain {...props} />} />
                <Route exact path="/signup" render={props => <SignupMain {...props} />} />
                <Route path="/users/:userId" render={props => <Redirect to="/" /> } />
            </>
        )
    }
};

const msp = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
    }
}; 

export default withRouter(connect(msp)(App));