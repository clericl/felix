import NavButton from './nav_button';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const msp = state => {
    return {
        currentUser: state.session.currentUser,
        text: "Create",
        hidden: "hidden",
    };
};

export default withRouter(connect(msp, null)(NavButton));