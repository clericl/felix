import React from 'react';
import SessionHeader from './session/header';
import SessionSection from './session/section';
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
                    <Section />
                    <Footer />
                </>
            )
        } else {
            return (
                <>
                    <SessionHeader />
                    <SessionSection />
                    {/* <SessionFooter /> */}
                </>
            )
        }
    };
};

const mapStateToProps = state => ({
    currentUser: state.session.currentUserId,
});

// export default App;
export default connect(mapStateToProps, null)(App);