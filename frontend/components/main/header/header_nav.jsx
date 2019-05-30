import React from 'react';
import ProfileButton from './profile_button';
import HomeButton from './home_button';
import CreateDropdown from './create_button';
import FriendsIndex from './friends_index';
import MessagesIndex from './messages_index';
import NotificationsIndex from './notifications_index';
import HelpDropdown from './help_dropdown';
import SettingsDropdown from './settings_dropdown';

class HeaderNav extends React.Component {
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

export default HeaderNav;