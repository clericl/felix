import React from 'react';
import { connect } from 'react-redux';
import { createComment } from '../../../actions/comment_actions';

class CreateCommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: this.props.formType === "edit" ? this.props.comment.body : ""
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
        if (e.key === "Enter") {
            const newComment = this.state;
            newComment.authorId = this.props.currentUser;
            newComment.postId = this.props.postId;
            newComment.parentId = this.props.parentId;
            this.props.createComment(newComment).then(
                res => this.setState({
                    body: "",
                })
            );
        }
    }


    render() {
        return (
            <div className={`create-${this.props.indexType}-box`}>
                <img
                    src={this.props.currentUserIcon}
                    className={`create-${this.props.indexType}-avatar-icon`}
                />
                <input
                    type="text"
                    value={this.state.body}
                    id={`${this.props.indexType === "comment" ? this.props.postId : this.props.parentId}-${this.props.indexType}`}
                    onChange={this.handleChange}
                    onKeyPress={this.handleSubmit}
                    className={`create-${this.props.indexType}-input`}
                    placeholder={`Write a ${this.props.indexType}...`}
                />
            </div>
        )
    }
}

const msp = state => {
    const currentUser = state.session.currentUser;
    return {
        currentUser,
        currentUserIcon: state.entities.users[currentUser].defaultImgUrl,
    };
};

const mdp = dispatch => {
    return {
        createComment: comment => dispatch(createComment(comment)),
    };
};

export default connect(msp, mdp)(CreateCommentBox);