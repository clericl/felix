import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost } from '../../../actions/post_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { FaPencilAlt } from 'react-icons/fa';

class CreatePostModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            showModal: false,
            changeFontSize: false, //85 chars
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggleModal() {
        this.setState({
            showModal: !this.state.showModal,
        });
    }

    handleChange(e) {
        this.setState({
            body: e.target.value,
        })
    }

    render() {
        if (this.props.pageUser) {
            const placeholder = this.props.pageUser.id !== this.props.currentUser ? 
                `Write something to ${this.props.pageUser.firstName}...` :
                "What's on your mind?";
    
            return (
                <div
                    className="create-post-box"
                    onClick={this.props.openModal}
                >
                    <div className="create-post-header">
                        <div className="create-post-header-item">
                            <FaPencilAlt />
                            Create Post
                        </div>
                        <p className="create-post-header-close">&times;</p>
                    </div>
                    <div className="create-post-body">
                        <img src={this.props.currentUserIcon} className="create-post-avatar-icon" />
                        <textarea
                            className="create-post-textarea"
                            placeholder={placeholder}
                            value={this.state.body}
                            onChange={this.handleChange}
                        ></textarea>
                    </div>
                    <div className="create-post-footer">
                        <button className="create-post-footer-post" onClick={this.props.createPost}>Post</button>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

const msp = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        currentUserIcon: state.entities.users[state.session.currentUser].defaultImgUrl,
        pageUser: state.entities.users[ownProps.match.params.userId],
    };
};

const mdp = dispatch => {
    return {
        createPost: post => dispatch(createPost(post)),
        closeModal: () => dispatch(closeModal()),
        openModal: () => dispatch(openModal(true)),
    };
};

export default withRouter(connect(msp, mdp)(CreatePostModal));