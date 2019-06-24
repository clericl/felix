import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import {
    FaRegNewspaper,
    FaGithub,
    FaLinkedin
} from 'react-icons/fa';

class LeftNav extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUser);
    }

    render() {
        return (
            <nav className="left-nav">
                <NavLink className="left-nav-link" to={`/users/${this.props.currentUser}`} >
                    <img className="left-nav-avatar-icon" src={this.props.currentPhoto} />
                    {this.props.currentName}
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
}

const msp = (state, ownProps) => {
    const myUser = state.entities.users[state.session.currentUser] ? state.entities.users[state.session.currentUser] : {defaultImgUrl: null, firstName: null, lastName: null};

    return {
        currentUser: state.session.currentUser,
        currentPhoto: myUser.defaultImgUrl,
        currentName: myUser.firstName + " " + myUser.lastName,
    };
}

const mdp = dispatch => {
    return {
        fetchUser: user => dispatch(fetchUser(user)),
    }
}

export default withRouter(connect(msp, mdp)(LeftNav));