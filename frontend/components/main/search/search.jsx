import React from 'react';
import { connect } from 'react-redux';
import PeopleResultItem from './people_result_item';
import PostResultItem from './post_result_item';
import { Redirect } from 'react-router-dom';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.renderPeopleResults = this.renderPeopleResults.bind(this);
        this.renderPostResults = this.renderPostResults.bind(this);
        this.renderPostResults = this.renderPostResults.bind(this);
    }

    renderPeopleResults() {
        return this.props.peopleResults.map(user => {
            return <PeopleResultItem user={user} key={user.id} />
        });
    }

    renderPostResults() {
        return this.props.postResults.map(post => {
            return <PostResultItem post={post} key={post.id} />
        });
    }

    render() {
        if (this.props.peopleResults.length + this.props.postResults.length === 0) {
            return (
                <Redirect to="/" />
            )
        } else {
            return (
                <div className="search-main">
                    <ul className="search-results-index">
                        <div className={this.props.peopleResults.length > 0 ? "people-results-list" : "none"}>
                            <ul className="people-results-index">
                            <div className="people-results-header">People</div>
                                {this.renderPeopleResults()}
                            </ul>
                        </div>
                        {this.renderPostResults()}
                    </ul>
                </div>
            )
        }
    }
}

const msp = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        currentUser: [state.entities.users[state.session.currentUser].firstName, state.entities.users[state.session.currentUser].lastName].join(" "),
        peopleResults: Object.values(state.ui.search).filter(
            result => result.firstName
        ),
        postResults: Object.values(state.ui.search).filter(
            result => result.authorId
        ),
    }
}

export default connect(msp, null)(Search);