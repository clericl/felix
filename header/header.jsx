import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginHeader from './login_header';
import SignupHeader from './signup_header';
import MainHeader from './main_header';


const Header = props => {
    return (
        <Switch>
            <Route exact path="/login" component={SignupHeader} />
            <Route exact path="/signup" component={LoginHeader} />
            <Route path="/" component={MainHeader} />
        </Switch>
    )
}

export default Header;