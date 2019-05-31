import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

class ProfileButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageUser: this.props.pageUser,
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
                <Redirect to={`/users/${this.state.pageUser.id}`} />
            )
        } else if (this.state.pageUser) {
            return (
                <button
                    className="nav-button"
                    id="profile-button"
                    onClick={this.handleClick}
                >
                    <img
                        className="profile-photo-nav-icon"
                        src={this.state.pageUser.defaultImgUrl}
                    />
                    {this.state.pageUser.firstName}
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
    };
}

export default withRouter(connect(msp, null)(ProfileButton));