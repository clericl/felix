import React from 'react'

const NavButton = props => {
    return (
        <button><img className={props.hidden} src={props.currentUser.avatar}/>{props.text}</button>
    )
}

export default NavButton;