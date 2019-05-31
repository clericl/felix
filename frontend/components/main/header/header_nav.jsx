import React from 'react';
import ProfileButton from './profile_button';
import HomeButton from './home_button';
import CreateDropdown from './create_button';
import FriendsIndex from './friends_index';
import MessagesIndex from './messages_index';
import NotificationsIndex from './notifications_index';
import HelpDropdown from './help_dropdown';
import SettingsDropdown from './settings_dropdown';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../../actions/user_actions';

class HeaderNav extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.currentUser);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId != this.props.match.params.userId) {
            this.props.fetchUser(this.props.match.params.userId);
        };
    }

    render() {
        return (
            <div className="header-menu">
                <div className="header-buttons">
                    <ProfileButton />
                    <HomeButton />
                    <CreateDropdown />
                </div>
                <div className="header-indexes">
                    <FriendsIndex />
                    <MessagesIndex />
                    <NotificationsIndex />
                </div>
                <div className="header-utils">
                    <HelpDropdown />
                    <SettingsDropdown />
                </div>
            </div>
        )
    }
}

const msp = state => {
    return {
        currentUser: state.session.currentUser,
    };
}

const mdp = dispatch => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId)),
    };
}

export default withRouter(connect(msp, mdp)(HeaderNav));