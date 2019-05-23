import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailPhoneVal = "",
            passwordVal = "",
        }
    };

    handleSubmit(e) {
        const { emailPhoneVal, passwordVal } = this.state;
        requestLogin(emailPhoneVal, passwordVal);
        passwordVal = "";
    };


    render() {
        const { emailPhoneVal, passwordVal } = this.state;

        return (
            <form>
                <div className="email-phone-input">
                    <label htmlFor="email-phone">Email or Phone</label>
                    <input type="text" value={emailPhoneVal}></input>
                </div>
                <div className="password-input">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={passwordVal}></input>
                    <a href="#">Forgot account?</a>
                </div>
                <button type="submit" className="session-button">Log In</button>
            </form>
        )
    };
};

export default SessionForm;