import React from 'react';
import NavDropdownItem from './nav_dropdown_item';
import { logoutUser } from '../../actions/session_actions';
import { connect } from 'react-redux';

class CreateButton extends React.Component {
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
            <>
                <button className="nav-button" onClick={this.handleIconClick}>Create</button>
                <ul
                    className={`dropdown-box ${this.state.show}`}
                    id="create-dropdown"
                    onClick={this.handleIconClick}
                >
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