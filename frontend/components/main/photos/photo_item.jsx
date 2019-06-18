import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { editUser } from '../../../actions/user_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProfileHeaderDropdownItem from '../user_profile/profile_header_dropdown_item';

class PhotoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showOptions: false,
        };
        this.toggleShowOverlay = this.toggleShowOverlay.bind(this);
        this.toggleHideOverlay = this.toggleHideOverlay.bind(this);
    }

    toggleShowOverlay() {
        if (!this.state.showOptions) {
            this.setState({
                showOptions: true,
            });
        }
    }

    toggleHideOverlay() {
        if (this.state.showOptions) {
            this.setState({
                showOptions: false,
                showDropdown: false,
            });
        }
    }

    handleSubmit(key) {
        const newUser = this.props.pageUser;
        newUser[key] = this.props.photo.url;

        this.props.editUser(newUser);
    }

    render() {
        return (
            <div
                className="position"
                onMouseEnter={this.toggleShowOverlay}
                onMouseLeave={this.toggleHideOverlay}
            >
                <img
                    className="photo-item"
                    src={this.props.photo.url}
                />
                <div className={`photo-item-overlay ${this.state.showOptions ? "" : "none"}`}>
                    <button
                        className="photos-header-button"
                        onClick={e => this.setState({ showDropdown: true })}
                    ><FaPencilAlt /></button>
                    <ul className={this.state.showDropdown ? "photo-item-options-dropdown" : "none"}>
                        <ProfileHeaderDropdownItem
                            text="Make Profile Picture"
                            action={e => this.handleSubmit("defaultImgUrl")}
                        />
                        <ProfileHeaderDropdownItem
                            text="Make Cover Photo"
                            action={e => this.handleSubmit("coverPhotoUrl")}
                        />
                        {/* <ProfileHeaderDropdownItem
                            text="Delete"
                            action={e => this.props.deletePhoto(this.props.photo.id)}
                        /> */}
                    </ul>
                    <div className="photo-item-overlay-bottom">
                        <div className="photo-item-overlay-actions"></div>
                        <div className="photo-item-overlay-comment-show-button"></div>
                    </div>
                </div>
            </div>
        )
    }
}

const msp = (state, ownProps) => {
    return {
        pageUser: state.entities.users[ownProps.match.params.userId],
    }
}

const mdp = dispatch => {
    return {
        editUser: user => dispatch(editUser(user)),
    }
}

export default withRouter(connect(msp, mdp)(PhotoItem));