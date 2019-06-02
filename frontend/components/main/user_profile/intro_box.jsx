import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { FaGlobeAmericas } from 'react-icons/fa';

class FriendsBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.pageUser) {
            return (
                <div className="profile-friends-box">
                    <div className="profile-friends-box-header">
                        <FaGlobeAmericas className="profile-friends-icon" />
                        <p className="profile-friends-box-link">
                            Intro
                        </p>
                    </div>
                    <ul className="friends-box-ul">
                        <li className="profile-intro-box-item">

                        </li>
                        <li className="profile-intro-box-item">

                        </li>
                        <li className="profile-intro-box-item">

                        </li>
                        <li className="profile-intro-box-item">

                        </li>
                        <li className="profile-intro-box-item">

                        </li>
                        <li className="profile-intro-box-item">
                            
                        </li>
                    </ul>
                </div>
            )
        } else {
            return null;
        }
    }
}

const msp = (state, ownProps) => {
    return {
        // friendsSample: ownProps.friendsSample.map(userId => state.entities.users[userId])
        pageUser: state.entities.users[ownProps.match.params.userId] || { id: null, friends: [] },
    }
}

export default withRouter(connect(msp, null)(FriendsBox));