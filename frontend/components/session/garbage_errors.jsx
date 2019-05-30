import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationCircle } from 'react-icons/fa';

class SessionError extends React.Component {
    constructor(props) {
        super(props);
        this.inputBox = document.getElementById(this.props.type);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onFocus(e) {
        e.target.removeEventListener("focus", this.onFocus);
        e.target.classList.remove("error-border");
        document.querySelectorAll(".error-icon").forEach(ele => ele.setAttribute("style", "visibility: hidden"));
        document.getElementById(`${this.props.type}-error-box`).classList.remove("hidden");
        e.target.addEventListener("blur", this.onBlur);
    }

    onBlur(e) {
        e.target.removeEventListener("blur", this.onBlur);
        e.target.classList.add("error-border");
        document.querySelectorAll(".error-icon").forEach(ele => ele.setAttribute("style", ""));
        document.getElementById(`${this.props.type}-error-box`).classList.add("hidden");
        e.target.addEventListener("focus", this.onFocus);
    }

    componentDidMount() {
        this.inputBox.classList.add("error-border");
        this.inputBox.addEventListener("focus", this.onFocus);
    }

    componentDidUpdate() {
        this.inputBox.classList.remove("error-border");
        this.inputBox.removeEventListener("focus", this.onFocus);
        this.inputBox.removeEventListener("blur", this.onBlur);
        this.inputBox = document.getElementById(this.props.type);
        document.getElementById(`${this.props.type}-error-box`).classList.remove("hidden");
        this.inputBox.classList.add("error-border"); 
        this.inputBox.addEventListener("focus", this.onFocus);
    }

    componentWillUnmount() {
        this.inputBox.removeEventListener("focus", this.onFocus);
        this.inputBox.removeEventListener("blur", this.onBlur);
    }

    render() {
        const { type } = this.props;
        switch (type) {
            case "email":
                return (
                    <div className="red-error-box email-error hidden" id="email-error-box">
                        <FaExclamationCircle className="error-icon" id="error-icon" />
                        <p>
                            The email or phone number you've entered doesn't match any account.&nbsp;
                            <Link to="/login" className="error-link">Sign up for an account.</Link>
                        </p>
                    </div>
                );
            case "password":
                return (
                    <div className="red-error-box password-error hidden" id="password-error-box">
                        <FaExclamationCircle className="error-icon" id="error-icon" />
                        <p>
                            The password you've entered is incorrect.&nbsp;
                            <Link to="/login" className="error-link">Forgot Password?</Link>
                        </p>
                    </div>
                );
            default:
                return (
                    <>
                    </>
                )
        };
    };
}

export default SessionError;