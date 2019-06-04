import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost } from '../../../actions/post_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { FaPencilAlt } from 'react-icons/fa';
import TextareaAutosize from 'react-autosize-textarea';

class CreatePostModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            body: e.target.value,
        });
    }

    handleSubmit(e) {
        const newPost = this.state;
        newPost.authorId = this.props.currentUser;
        newPost.postableType = "User";
        newPost.postableId = this.props.pageUser.id;
        this.props.createPost(newPost).then(
            res => this.setState({
                    body: "",
                })
        );
    }

    render() {
        const textareaFontSize = this.state.body.length > 85 ? "-small" : "";
        const textarea = this.props.modal === "createPost" ?
            `create-post-textarea-modal${textareaFontSize}` : "create-post-textarea";
        const footer = (this.props.pageUser.id !== this.props.currentUser) ?
            "create-post-footer" : (this.props.modal === "createPost" ? "create-post-footer-modal-self" : "none");
        const footerButton = this.props.pageUser.id !== this.props.currentUser ? (
            <button
                className="create-post-footer-post"
                disabled={this.state.body.length === 0}
                onClick={this.handleSubmit}
            >Post</button>
        ) : (
            <button
                className="create-post-footer-share"
                disabled={this.state.body.length === 0}
                 onClick={this.handleSubmit}
            >Share</button>
        )
        const closeButton = this.props.modal ? "create-post-header-close" : "hidden"

        // Wide Post => diff user, modal true
        // Narrow Post => diff user, modal false
        // null => same user, modal false
        // Wide Share => same user, modal true
        // i hate facebook

        if (this.props.pageUser) {
            if ((this.props.currentFriends.includes(this.props.pageUser.id) ||
                this.props.pageUser.friends.includes(this.props.currentUser) ||
                this.props.pageUser.id == this.props.currentUser)) {

                    const placeholder = this.props.pageUser.id !== this.props.currentUser ? 
                        `Write something to ${this.props.pageUser.firstName}...` :
                        "What's on your mind?";
            
                    return (
                        <div
                            className={this.props.modal === "createPost" ? "create-post-box-high" : "create-post-box"}
                            onClick={this.props.openModal}
                        >
                            <div className="create-post-header">
                                <div className="create-post-header-item">
                                    <FaPencilAlt className="create-post-header-icon" />
                                    Create Post
                                </div>
                                <p
                                    className={closeButton}
                                    onClick={e => {
                                        e.stopPropagation();
                                        this.props.closeModal();
                                    }}
                                >&times;</p>
                            </div>
                            <div className="create-post-body">
                                <img src={this.props.currentUserIcon} className="create-post-avatar-icon" />
                                <TextareaAutosize
                                    className={textarea}
                                    placeholder={placeholder}
                                    value={this.state.body}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className={footer}>
                                {footerButton}
                            </div>
                        </div>
                    )
                } else {
                    return null;
                };
        } else {
            return null;
        }
    }
}

const msp = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        currentUserIcon: state.entities.users[state.session.currentUser].defaultImgUrl,
        currentFriends: state.entities.users[state.session.currentUser].friends,
        pageUser: state.entities.users[ownProps.match.params.userId],
        modal: state.ui.modal,
    };
};

const mdp = dispatch => {
    return {
        createPost: post => dispatch(createPost(post)),
        closeModal: () => dispatch(closeModal()),
        openModal: () => dispatch(openModal("createPost")),
    };
};

export default withRouter(connect(msp, mdp)(CreatePostModal));