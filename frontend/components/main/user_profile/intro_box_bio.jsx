import React from 'react';
import { editUser } from '../../../actions/user_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FaPencilAlt, FaRegCommentAlt } from 'react-icons/fa';

class IntroBoxBio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditButton: false,
            showEdit: false,
            bio: "",
        };
        this.showEditButton = this.showEditButton.bind(this);
        this.hideEditButton = this.hideEditButton.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    showEditButton(e) {
        this.setState({
            showEditButton: true,
        });
    }

    hideEditButton(e) {
        this.setState({
            showEditButton: false,
        });
    }

    toggleEdit(e) {
        this.setState({
            showEdit: !this.state.showEdit,
        });
    }

    handleChange(e) {
        this.setState({
            bio: e.target.value,
        });
    }

    handleSubmit(e) {
        const updatedUser = this.props.pageUser;
        updatedUser.bio = this.state.bio;
        this.props.editUser(updatedUser);
        this.setState({
            showEdit: false,
        });
    }

    render() {
        if (this.props.pageUser) {
            if (this.props.pageUser.id === this.props.currentUser) {
                if (this.state.showEdit) {
                    return (
                        <div className="profile-intro-edit-bio">
                            <textarea
                                className="profile-intro-edit-bio-textarea"
                                placeholder="Describe who you are"
                                maxLength="100"
                                value={this.state.bio}
                                onChange={this.handleChange}
                            />
                            <div className="profile-intro-edit-bio-options">
                                <p className="profile-intro-edit-bio-count">{101 - this.state.bio.length}</p>
                                <div>
                                    <button className="profile-intro-bio-cancel" onClick={this.toggleEdit}>Cancel</button>
                                    <button className="profile-intro-bio-save" onClick={this.handleSubmit}>Save</button>
                                </div>
                            </div>
                        </div>
                    )
                } else if (this.props.pageUser.bio) {
                    return (
                        <p
                            className="profile-intro-box-bio"
                            onMouseEnter={this.showEditButton}
                            onMouseLeave={this.hideEditButton}
                        >
                            {this.props.pageUser.bio}
                            <FaPencilAlt
                                className={`profile-intro-box-edit-icon ${this.state.showEditButton ? "" : "hidden"}`}
                                onClick={this.toggleEdit}
                            />
                        </p>
                    )
                } else {
                    return (
                        <p
                            className="profile-intro-box-add-bio"
                        >
                            <FaRegCommentAlt className="profile-intro-box-add-bio-icon" />
                            <p>Add a short bio to tell people more about yourself.</p>
                            <p className="profile-intro-box-add-bio-link" onClick={this.showEdit}>Add Bio</p>
                        </p>
                    )
                };
            } else {
                return (
                    <p className="profile-intro-box-bio">
                        {this.props.pageUser.bio}
                    </p>
                )
            };
        } else {
            return null;
        };
    }
}

const msp = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        pageUser: state.entities.users[ownProps.match.params.userId] || {id: "", bio: null}
    }
}

const mdp = dispatch => {
    return {
        editUser: user => dispatch(editUser(user)),
    }
}

export default withRouter(connect(msp, mdp)(IntroBoxBio));