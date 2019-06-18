import React from 'react';
import { connect } from 'react-redux';
import { FaCaretDown } from 'react-icons/fa';
import { logoutUser } from '../../actions/session_actions';
import NavDropdownItem from './nav_dropdown_item';

class SettingsDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: "hidden",
        };
        this.handleIconClick = this.handleIconClick.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    handleIconClick(e) {
        document.addEventListener("click", this.handleClickOutside);
        this.setState({
            show: "",
        });
    }

    handleClickOutside(e) {
        document.removeEventListener("click", this.handleClickOutside);
        this.setState({
            show: "hidden",
        });
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleClickOutside);
    }

    render() {
        return (
            <div>
                <FaCaretDown className="nav-icon" id="settings-icon" onClick={this.handleIconClick} />
                <ul className={`dropdown-box ${this.state.show}`}
                    id="settings-dropdown"
                    onClick={this.handleIconClick}
                >
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