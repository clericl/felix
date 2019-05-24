import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions/session_actions';

class NewUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            emailPhone: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.createUser(this.state).then(        
            // e => this.props.history.push('/index')
        )
    };

    handleChange(e, key) {
        this.setState({
            [key]: e.target.value,
        })
    }

    render() {
        const { firstName, lastName, emailPhone, password } = this.state;
        
        return (
            <form onSubmit={this.handleSubmit}>
                
                <h2>Sign Up</h2>
                <div className="first-last-name-input">
                    <input
                        type="text"
                        value={firstName}
                        placeholder="First name"
                        onChange={e => this.handleChange(e, 'firstName')}
                    />
                    <input
                        type="text"
                        value={lastName}
                        placeholder="Last name"
                        onChange={e => this.handleChange(e, 'lastName')}    
                    />
                </div>
                <div className="email-phone-input">
                    <input
                        type="text"
                        value={emailPhone}
                        placeholder="Mobile number or email"
                        onChange={e => this.handleChange(e, 'emailPhone')}
                    />
                </div>
                <div className="password-input">
                    <input
                        type="password"
                        value={password}
                        placeholder="New password"
                        onChange={e => this.handleChange(e, 'password')}
                    />
                </div>
                <button
                    type="submit"
                    className="sign-up-button"
                >Sign Up</button>
            </form>
        )
    };
};

const mapDispatchToProps = dispatch => ({
    createUser: user => dispatch(createUser(user))
})

export default connect(null, mapDispatchToProps)(NewUserForm);