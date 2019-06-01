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
        this.toggleSelected = this.toggleSelected.bind(this);
    }

    toggleSelected(e, key) {
        this.setState({
            selected: key
        });
    }

    render() {
        return (
            <nav className="profile-header-nav">
                <Link
                    className={`profile-header-nav-button${this.state.selected === "timeline" ? "-selected" : ""}`}
                    to={this.props.match.url}
                    onClick={e => this.toggleSelected(e, "timeline")}
                >Timeline</Link>
                <Link
                    className={`profile-header-nav-button${this.state.selected === "about" ? "-selected" : ""}`}
                    to={this.props.match.url}
                    onClick={e => this.toggleSelected(e, "about")}
                >About</Link>
                <Link
                    className={`profile-header-nav-button${this.state.selected === "friends" ? "-selected" : ""}`}
                    to={this.props.match.url}
                    onClick={e => this.toggleSelected(e, "friends")}
                >Friends</Link>
                <Link
                    className={`profile-header-nav-button${this.state.selected === "photos" ? "-selected" : ""}`}
                    to={this.props.match.url}
                    onClick={e => this.toggleSelected(e, "photos")}
                >Photos</Link>
                {/* <p
                    className="profile-header-nav-button"
                >More &nbsp;<FaCaretDown /></p> */}
            </nav>
        )
    }
}

export default withRouter(ProfileHeaderNav);