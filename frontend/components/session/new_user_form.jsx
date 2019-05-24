import React from 'react';

class NewUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            emailPhone: "",
            password: "",
            // birthdayVals
            // genderVal
        }
    };

    handleSubmit(e) {
        const { firstName, lastName, emailPhone, password } = this.state;
        createUser(firstName, lastName, emailPhone, password).then(
            e => this.setState({
                password: "",
        }));
    };

    handleChange(e, key) {
        this.setState({
            [key]: e.target.value,
        })
    }

    render() {
        const { firstName, lastName, emailPhone, password } = this.state;

        return (
            <form>
                <div className="first-last-name-input">
                    <input
                        type="text"
                        value={firstName}
                        placeholder="First name"
                        onChange={e => handleChange(e, firstName)}
                    />
                    <input
                        type="text"
                        value={lastName}
                        placeholder="Last name"
                        onChange={e => handleChange(e, lastName)}    
                    />
                </div>
                <div className="email-phone-input">
                    <input
                        type="text"
                        value={emailPhone}
                        placeholder="Mobile number or email"
                        onChange={e => handleChange(e, emailPhone)}
                    />
                </div>
                <div className="password-input">
                    <input
                        type="password"
                        value={password}
                        placeholder="New password"
                        onChange={e => handleChange(e, password)}
                    />
                </div>
                <button type="submit" className="sign-up-button">Sign Up</button>
            </form>
        )
    };
};

export default NewUserForm;