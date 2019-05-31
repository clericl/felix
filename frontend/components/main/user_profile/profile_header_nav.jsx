import React from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';

class ProfileHeaderNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "timeline"
        };
    }

    render() {
        return (
            <nav className="profile-header-nav">
                <Link className="profile-header-nav-button" to={this.props.match.params.userId}>Timeline</Link>
                <Link className="profile-header-nav-button" to={this.props.match.params.userId}>About</Link>
                <Link className="profile-header-nav-button" to={this.props.match.params.userId}>Friends</Link>
                <Link className="profile-header-nav-button" to={this.props.match.params.userId}>Photos</Link>
                <p className="profile-header-nav-button">More &nbsp;<FaCaretDown /></p>
            </nav>
        )
    }
}

export default withRouter(ProfileHeaderNav);