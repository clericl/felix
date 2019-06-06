import React from 'react'
import { fetchUser } from '../../../actions/user_actions';
import FriendsButton from '../user_profile/friends_button';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class PeopleResultItem extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.user.id);
    }

    render() {
        return (
            <div className="people-results-item">
                <img src={this.props.user.defaultImgUrl} className="people-results-item-avatar" />
                <div className="people-results-item-details">
                    <Link to={`/users/${this.props.user.id}`} className="post-item-header-name">{[this.props.user.firstName, this.props.user.lastName].join(" ")}</Link>
                    <p className="post-item-header-date">
                        {this.props.user.workplace ? this.props.user.workplace : (this.props.user.currentCity ? this.props.user.currentCity : null)}
                    </p>
                </div>
                <div className="search-friends-button">
                    <FriendsButton pageUser={this.props.user} buttonType="search" />
                </div>
            </div>
        )
    }
}

const mdp = dispatch => {
    return {
        fetchUser: id => dispatch(fetchUser(id)),
    }
}

export default connect(null, mdp)(PeopleResultItem);