import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailPhone: "",
            password: "",
        }
    };

    handleSubmit(e) {
        const { emailPhone, password } = this.state;
        requestLogin(emailPhone, password);
    };

    handleChange(e, key) {
        this.setState({
           [key]: e.target.value, 
        })
    }

    render() {
        const { emailPhone, password } = this.state;

        return (
            <form>
                <div className="email-phone-input">
                    <label htmlFor="email-phone">Email or Phone</label>
                    <input
                        type="text"
                        value={emailPhone}
                        onChange={e => handleChange(e, emailPhone)}
                    />
                </div>
                <div className="password-input">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => handleChange(e, password)}
                    />
                    <a href="#">Forgot account?</a>
                </div>
                <button type="submit" className="session-button">Log In</button>
            </form>
        )
    };
};

export default SessionForm;