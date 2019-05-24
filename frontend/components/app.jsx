import React from 'react';
import SessionHeader from './session/header';
import SessionMain from './session/main';
import { connect } from 'react-redux';

class App extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        if (this.props.currentUser) {
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
};

const mapStateToProps = state => ({
    currentUser: state.session.currentUserId,
});

export default connect(mapStateToProps, null)(App);