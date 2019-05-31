import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FriendsButton from './friends_button';

class ProfileHeaderUtils extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myUser: this.props.myUser
        };
    }

    render() {
        const displayName = [this.props.myUser.firstName, this.props.myUser.lastName].join(" ");
        
        return (
            <div>
                <Link
                    to={`/users/${this.props.myUser.id}`}
                    className="header-user-name">{displayName}
                </Link>
                <div className="profile-header-nav-floating-buttons">
                    <FriendsButton />
                </div>
            </div>

        )

    }
}

const msp = (state, ownProps) => {
    return {
        myUser: state.entities.users[ownProps.match.params.userId] || {
            firstName: "",
            lastName: "",
            id: ""
        },
    }
}

export default withRouter(connect(msp, null)(ProfileHeaderUtils));