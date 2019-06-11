import React from 'react';
import NewUserForm from './new_user_form';
import DemoLink from './demo_link';

class NewUserMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="main new-user-main">
                <section className="new-user-content">
                    <span className="new-user-heading">
                        <h2 className="new-user-h2">Connect with the three other</h2>
                        <h2 className="new-user-h2">people on felix. All of them are me.</h2>
                    </span>
                    <div>
                        <div className="new-user-text"><img src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.2365-6/32213527_1720875981299142_7601737152052854784_n.png?_nc_cat=1&_nc_ht=scontent-lga3-1.xx&oh=0b20e6e14e749a98340202f00140bb83&oe=5D65CEE8" /><strong className="strong">See photos and updates</strong>&nbsp; from friends in News Feed.</div>
                        <div className="new-user-text"><img src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.2365-6/32220240_200651090730619_3989834943638274048_n.png?_nc_cat=1&_nc_ht=scontent-lga3-1.xx&oh=0102726453b4ec84c333ab158255b1c0&oe=5D653A36" /><strong className="strong">Share what's new</strong>&nbsp; in your life on your Timeline.</div>
                        <div className="new-user-text"><img src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.2365-6/32158113_191365994837162_5605369115159035904_n.png?_nc_cat=106&_nc_ht=scontent-lga3-1.xx&oh=e89952daf8c051cf371e3178ec5e9f0c&oe=5D9C64B5" /><strong className="strong">Find more</strong>&nbsp; of what you're looking for with felix Search.</div>
                    </div>
                </section>
                <div>
                    <NewUserForm />
                    <DemoLink />
                </div>
            </main>
        )
    }
}

export default NewUserMain;