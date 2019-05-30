import React from 'react';
// import NavIndexItem from './nav_index_item';
import { FaBell } from 'react-icons/fa';

class NotificationsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.handleIconClick = this.handleIconClick.bind(this);
        this.handleCloseDropdown = this.handleCloseDropdown.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    handleIconClick(e) {
        document.querySelector("#notifications-dropdown").classList.remove("hidden");
        document.addEventListener("click", this.handleClickOutside);
    }

    handleCloseDropdown(e) {
        document.querySelector("#notifications-dropdown").classList.add("hidden");
        document.removeEventListener("click", this.handleClickOutside);
    }

    handleClickOutside(e) {
        const dropdown = document.getElementById("notifications-dropdown");

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
                <FaBell className="nav-icon" onClick={this.handleIconClick} />
                <ul className="dropdown-box hidden" id="notifications-dropdown" >
                </ul>
            </>
        )
    }
}

export default NotificationsIndex;