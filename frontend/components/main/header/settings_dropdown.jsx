import React from 'react';
import { connect } from 'react-redux';
import { FaCaretDown } from 'react-icons/fa';
import { logoutUser } from '../../../actions/session_actions';
import NavDropdownItem from './nav_dropdown_item';

class SettingsDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.handleIconClick = this.handleIconClick.bind(this);
        this.handleCloseDropdown = this.handleCloseDropdown.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    handleIconClick(e) {
        e.currentTarget.classList.add("icon-selected");
        document.querySelector("#settings-dropdown").classList.remove("hidden");
        document.addEventListener("click", this.handleClickOutside);
    }

    handleCloseDropdown(e) {
        document.querySelector("#settings-icon").classList.remove("icon-selected");
        document.querySelector("#settings-dropdown").classList.add("hidden");
        document.removeEventListener("click", this.handleClickOutside);
    }

    handleClickOutside(e) {
        const dropdown = document.getElementById("settings-dropdown");

        if (dropdown && !dropdown.contains(e.target)) {
            this.handleCloseDropdown();
        }
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleClickOutside);
    }

    render() {
        return (
            <div>
                <FaCaretDown className="nav-icon" id="settings-icon" onClick={this.handleIconClick} />
                <ul className="dropdown-box hidden" id="settings-dropdown" >
                    <NavDropdownItem text="Log Out" action={this.props.logoutUser} />
                </ul>
            </div>
        )
    }
}

const mdp = dispatch => {
    return {
        logoutUser: () => dispatch(logoutUser()),
    };
};

export default connect(null, mdp)(SettingsDropdown);