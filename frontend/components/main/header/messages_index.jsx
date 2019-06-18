import React from 'react';
// import NavIndexItem from './nav_index_item';
import { FaFacebookMessenger } from 'react-icons/fa';

class MessagesIndex extends React.Component {
    constructor(props) {
        super(props);
        this.handleIconClick = this.handleIconClick.bind(this);
        this.handleCloseDropdown = this.handleCloseDropdown.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    handleIconClick(e) {
        document.querySelector("#messages-dropdown").classList.remove("hidden");
        document.addEventListener("click", this.handleClickOutside);
    }

    handleCloseDropdown(e) {
        document.querySelector("#messages-dropdown").classList.add("hidden");
        document.removeEventListener("click", this.handleClickOutside);
    }

    handleClickOutside(e) {
        const dropdown = document.getElementById("messages-dropdown");

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
                <FaFacebookMessenger className="nav-icon" onClick={this.handleIconClick} />
                <ul className="dropdown-box hidden" id="messages-dropdown" >
                </ul>
            </>
        )
    }
}

export default MessagesIndex;