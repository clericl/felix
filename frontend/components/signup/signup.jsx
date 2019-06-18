import React from 'react';
import DemoLink from '../main/new_user_main/demo_link';
import NewUserForm from '../main/new_user_main/new_user_form';

class SignupMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="signup-main">
                <NewUserForm />
                <DemoLink />
            </main>
        )
    }
}
export default SignupMain;