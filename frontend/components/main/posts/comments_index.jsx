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
    }

    reload() {
        this.props.refetchComments(this.props.post.id, this.state.commentOffset).then(
            res => this.setState({
                commentOffset: (this.state.commentOffset + 1),
            })
        );
    }

    componentDidMount() {
        this.reload();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.post.id !== this.props.post.id) {
            this.setState({
                commentOffset: 0,
            });
            this.reload();
        }
    }

    render() {
        if (this.props.post.comments) {
            const receivedComments = this.props.receivedComments.map(
                comment => <CommentItem comment={comment} key={comment.id} />
            );

            return (
                <>
                    <ul className="comments-index">
                        {receivedComments}
                    </ul>
                    <CreateCommentBox currentPost={this.props.post.id} />
                </>
            )
        } else {
            return null;
        }
    }
}

const msp = (state, ownProps) => {
    return {
        receivedComments: Object.values(state.entities.comments)
            .filter(comment => (comment.postId == ownProps.post.id))
            .sort((x, y) => x.updatedAt > y.updatedAt)
    }
}

const mdp = dispatch => {
    return {
        refetchComments: (id, offset) => dispatch(refetchComments(id, offset)),
    }
}

export default connect(msp, mdp)(CommentsIndex);