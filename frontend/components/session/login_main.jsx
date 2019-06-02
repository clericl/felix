import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import LoginHeader from './login_header';
import LoginForm from './login_form';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session_actions';

class LoginMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <LoginHeader />
                <div className="login-main-box">
                    <div className="login-box">
                        <h3>Log Into Felix</h3>
                        <LoginForm />
                        <Link to="/signup" className="forgot-account-link">
                            Sign up for Felix
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}

const mdp = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors),
    }
}

export default connect(null, mdp)(LoginMain);