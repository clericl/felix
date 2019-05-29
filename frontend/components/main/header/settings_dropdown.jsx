import React from 'react';
import NavDropdownItem from './nav_dropdown_item';
import { logoutUser } from '../../../actions/session_actions';
import { connect } from 'react-redux';
import { FaCaretDown } from 'react-icons/fa'

class SettingsDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.handleIconClick = this.handleIconClick.bind(this);
        this.handleCloseDropdown = this.handleCloseDropdown.bind(this);
    }

    handleIconClick(e) {
        e.currentTarget.parentNode.querySelector(".dropdown-box").classList.remove("hidden");
    }

    handleCloseDropdown(e) {
        debugger
        e.target.classList.add("hidden");
    }

    render() {
        return (
            <div className="nav-dropdown">
                <FaCaretDown className="dropdown-icon" onClick={this.handleIconClick} />
                <ul className="dropdown-box hidden" onBlur={this.handleCloseDropdown} >
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