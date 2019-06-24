import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import {
    FaRegNewspaper,
    FaGithub,
    FaLinkedin
} from 'react-icons/fa';

const LeftNav = props => {
    return (
        <nav className="left-nav">
            <NavLink className="left-nav-link" to={`/users/${props.currentUser}`} >
                <img className="left-nav-avatar-icon" src={props.currentPhoto} />
                {props.currentName}
            </NavLink>
            <NavLink className="left-nav-link" to="/" >
                <FaRegNewspaper className="left-nav-icon" />
                News Feed
            </NavLink>
            <a className="left-nav-link" href="https://github.com/clericl/felix" target="_blank" rel="noopener noreferrer">
                <FaGithub className="left-nav-icon" />
                GitHub
            </a>
            <a className="left-nav-link" href="https://www.linkedin.com/in/eliang58/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="left-nav-icon" />
                LinkedIn
            </a>
            <p className="left-nav-footer">© 2019 Eric Liang. Inspired by Facebook.</p>
        </nav>
    )
}

const msp = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        currentPhoto: state.entities.users[state.session.currentUser].defaultImgUrl,
        currentName: state.entities.users[state.session.currentUser].firstName + " " + state.entities.users[state.session.currentUser].lastName,
    };
}

export default withRouter(connect(msp, null)(LeftNav));