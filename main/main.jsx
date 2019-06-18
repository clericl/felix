import React from 'react';
import NewsFeed from './news_feed';
import { NewsFeedPostModal } from './posts/create_post_modal';

class Main extends React.Component {
    render() {
        return (
            <main className="main-content">
                <div className="main-center-column">
                    <NewsFeedPostModal />
                    <NewsFeed />
                </div>
            </main>
        )
    }
}

export default Main;