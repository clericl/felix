import React from 'react';
// import NavIndexItem from './nav_index_item';
import { FaUserFriends } from 'react-icons/fa';

class FriendsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.handleIconClick = this.handleIconClick.bind(this);
        this.handleCloseDropdown = this.handleCloseDropdown.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    handleIconClick(e) {
        document.querySelector("#friends-dropdown").classList.remove("hidden");
        document.addEventListener("click", this.handleClickOutside);
    }

    handleCloseDropdown(e) {
        document.querySelector("#friends-dropdown").classList.add("hidden");
        document.removeEventListener("click", this.handleClickOutside);
    }

    handleClickOutside(e) {
        const dropdown = document.getElementById("friends-dropdown");

        if (dropdown && !dropdown.contains(e.target)) {
            this.handleCloseDropdown();
        }
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleClickOutside);
    }

    render() {
        return (
            <>
                <FaUserFriends className="nav-icon" onClick={this.handleIconClick} />
                <ul className="dropdown-box hidden" id="friends-dropdown" >
                </ul>
            </>
        )
    }
}

export default FriendsIndex;