import React from 'react';

const NavDropdownItem = props => {
    return (
        <li className="nav-dropdown-item" onClick={props.action}>{props.text}</li>
    )
}

export default NavDropdownItem;