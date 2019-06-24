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
import { AuthRoute } from '../util/route_util';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            window.scroll(0, 0);
        }
    }

    render() {
        if (this.props.currentUser) {
            return (
                <>
                    <Modal />
                    <Header />
                    <Route exact path="/" component={Main} />
                    <Route exact path="/search" component={Search} />
                    <AuthRoute exact path="/login" component={LoginMain} />
                    <AuthRoute exact path="/signup" component={SignupMain} />
                    <Route path="/users/:userId" component={UserProfile} />
                </>
            )
        } else {
            return (
                <>
                    <Header />
                    <Route exact path="/" component={NewUserMain} />
                    <Route exact path="/search" render={() => <Redirect to="/" />} />
                    <Route exact path="/login" component={LoginMain} />
                    <Route exact path="/signup" component={SignupMain} />
                    <Route path="/users/:userId" render={() => <Redirect to="/" /> } />
                </>
            )
        }
    }
};

const msp = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
    }
}; 

export default withRouter(connect(msp)(App));