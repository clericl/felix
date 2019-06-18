import React from 'react';
import { Link } from 'react-router-dom';

const SplashHeaderError = props => {
    if (props.error === "loginEmail") {
        return (
            <div className="splash-header-error">
                <p>
                    The email or phone number you've entered doesn't match any account.&nbsp;
                    <Link to="/" className="error-link">Sign up for an account.</Link>
                </p>
            </div>
        )
    } else if (props.error === "loginPassword") {
        return (
            <div className="splash-header-error">
                <p>
                    The password you've entered is incorrect.&nbsp;
                    <Link to="/" className="error-link">Forgot Password?</Link>
                </p>
            </div>
        )
    } else {
        return (
            <>
            </>
        )
    }
}

export default SplashHeaderError;