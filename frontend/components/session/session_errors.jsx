import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationCircle } from 'react-icons/fa';

class SessionError extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        <div className="red-error-box email-error hidden" id="email-error-box">
            <FaExclamationCircle className="error-icon" id="error-icon" />
            <p>
                The email or phone number you've entered doesn't match any account.&nbsp;
                <Link to="/login" className="error-link">Sign up for an account.</Link>
            </p>
        </div>
    }
}

export default SessionError