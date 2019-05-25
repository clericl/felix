import React from 'react';
import SessionHeader from './session/header';
import SessionMain from './session/main';
import { connect } from 'react-redux';

const App = props => {
    if (props.currentUser) {
        return (
            <>
                <Header />
                <Main />
                <Footer />
            </>
        )
    } else {
        return (
            <>
                <SessionHeader />
                <SessionMain />
                {/* <SessionFooter /> */}
            </>
        )
    }
};

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
});

export default connect(mapStateToProps, null)(App);