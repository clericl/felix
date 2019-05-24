import React from 'react';
import { connect } from 'react-redux';
import { requestLogin } from '../../actions/session_actions';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailPhone: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleSubmit(e) {
        this.props.requestLogin(this.state);
    };

    handleChange(e, key) {
        this.setState({
           [key]: e.target.value, 
        })
    }

    render() {
        const { emailPhone, password } = this.state;

        return (
            <form className="session-form">
                <div className="email-phone-input">
                    <label htmlFor="email-phone">Email or Phone</label>
                    <input
                        type="text"
                        value={emailPhone}
                        onChange={e => this.handleChange(e, 'emailPhone')}
                    />
                </div>
                <div className="password-input">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => this.handleChange(e, 'password')}
                    />
                    <a href="#">Forgot account?</a>
                </div>
                <button type="submit" className="session-button">Log In</button>
            </form>
        )
    };
};

const mapDispatchToProps = dispatch => ({
    createUser: user => dispatch(requestLogin(user))
})

export default connect(null, mapDispatchToProps)(SessionForm);