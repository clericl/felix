import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ProfileButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myUser: this.props.myUser
        };
        this.setPath = this.setPath.bind(this);
    }

    setPath(e) {
        this.props.history.push(`/users/${this.props.currentUser}`)
    }

    render() {
        const proPic = this.props.myUser.defaultImgUrl || window.catvatarUrl
        return (
            <button className="nav-button" id="profile-button" onClick={this.setPath}>
                <img className="profile-photo-nav-icon" src={proPic} />
                {this.props.myUser.firstName}
            </button>
        )
    }
}

const msp = state => {
    return {
        currentUser: state.session.currentUser,
        myUser: state.entities.users[state.session.currentUser] || {id: ""},
    };
};

export default withRouter(connect(msp, null)(ProfileButton));