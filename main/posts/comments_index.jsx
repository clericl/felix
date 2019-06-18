import React from 'react';
import { connect } from 'react-redux';
import CommentItem from './comment_item';
import CreateCommentBox from './create_comment_box';
import { refetchComments } from '../../../actions/comment_actions';

class CommentsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentOffset: 0,
        };
        this.reload = this.reload.bind(this);
        this.renderComments = this.renderComments.bind(this);
    }

    reload() {
        this.props.refetchComments(this.props.postId, this.state.commentOffset).then(
            res => this.setState({
                commentOffset: (this.state.commentOffset + 1),
            })
        );
    }

    componentDidMount() {
        this.reload();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.postId !== this.props.postId) {
            this.setState({
                commentOffset: 0,
            });
            this.reload();
        }
    }

    renderComments() {
        let comments = null;
        if (this.props.indexType === "reply") {
            comments = this.props.childComments.map(
                comment => <CommentItem comment={comment} key={comment.id} indexType="reply" />
            );
        } else if (this.props.indexType === "comment") {
            comments = this.props.receivedComments.map(
                comment => <CommentItem comment={comment} key={comment.id} indexType="comment" />
            );
        }
        return comments;
    }

    render() {
        return (
            <>
                <ul className="comments-index">
                    {this.renderComments()}
                    <CreateCommentBox
                        postId={this.props.postId}
                        parentId={this.props.parentId}
                        indexType={this.props.indexType}
                    />
                </ul>
            </>
        )
    }
}

const msp = (state, ownProps) => {
    const receivedComments = Object.values(state.entities.comments)
        .filter(comment => (!comment.parentId && (comment.postId === ownProps.postId)));

    const childComments = Object.values(state.entities.comments)
        .filter(comment => (comment.parentId == ownProps.parentId));

    return {
        receivedComments,
        childComments,
    }
}

const mdp = dispatch => {
    return {
        refetchComments: (id, offset) => dispatch(refetchComments(id, offset)),
    }
}

export default connect(msp, mdp)(CommentsIndex);