import React from 'react';
import NavDropdownItem from './nav_dropdown_item';
import { logoutUser } from '../../../actions/session_actions';
import { connect } from 'react-redux';

class CreateButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleIconClick = this.handleIconClick.bind(this);
        this.handleCloseDropdown = this.handleCloseDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
    }

    hideDropdown() {
        document.querySelector("#create-dropdown").classList.add("hidden");
    }

    handleIconClick(e) {
        e.currentTarget.parentNode.querySelector(".dropdown-box").classList.remove("hidden");
        document.body.addEventListener("click", this.hideDropdown);
    }

    handleCloseDropdown(e) {
        e.target.classList.add("hidden");
        document.body.removeEventListener("click", this.hideDropdown);
    }

    componentWillUnmount() {
        document.body.removeEventListener("click", this.hideDropdown);
    }

    render() {
        return (
            <>
                <button className="nav-button" onClick={this.handleIconClick}>Create</button>
                <ul className="dropdown-box hidden" id="create-dropdown" >
                    <NavDropdownItem text="Log Out" action={this.props.logoutUser} />
                </ul>
            </>
        )
    }
}

const mdp = dispatch => {
    return {
        logoutUser: () => dispatch(logoutUser()),
    };
};

export default connect(null, mdp)(CreateButton);