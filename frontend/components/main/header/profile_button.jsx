import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

class ProfileButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fireRedirect: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({
            fireRedirect: true,
        });
    }

    componentDidUpdate() {
        if (this.state.fireRedirect) {
            this.setState({
                fireRedirect: false,
            });
        }
    }

    render() {
        if (this.state.fireRedirect) {
            return (
                <Redirect to={`/users/${this.props.currentUser}`} />
            )
        } else if (this.props.currentUser) {
            return (
                <button
                    className="nav-button"
                    id="profile-button"
                    onClick={this.handleClick}
                >
                    <img
                        className="profile-photo-nav-icon"
                        src={this.props.currentPhoto}
                    />
                    {this.props.currentName}
                </button>
            )
        } else {
            return null;
        }
    }
}

const msp = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        currentPhoto: state.entities.users[state.session.currentUser].defaultImgUrl,
        currentName: state.entities.users[state.session.currentUser].firstName,
    };
}

export default withRouter(connect(msp, null)(ProfileButton));