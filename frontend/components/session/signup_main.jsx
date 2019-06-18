import React from 'react';
import SignupForm from './signup_form';
import DemoLink from './demo_link';
import SplashHeader from './splash_header';

class SignupMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const divStyle = {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "20px",
        };

        return (
            <>
                <SplashHeader />
                <main className="signup-main">
                    <div>
                        <SignupForm />
                        <DemoLink />
                    </div>
                </main>
            </>
        )
    }
}

export default SignupMain;