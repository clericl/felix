import React from 'react';
// import ProfileButton from './profile_button';
// import HomeButton from './home_button';
import SettingsDropdown from './settings_dropdown';

class HeaderNav extends React.Component {
    render() {
        return (
            <>
                {/* <ProfileButton />
                <HomeButton />
                <CreateDropdown />
                <FriendsIndex />
                <MessagesIndex />
                <NotificationsIndex />
                <HelpDropdown /> */}
                <SettingsDropdown />
            </>
        )
    }
}

export default HeaderNav;