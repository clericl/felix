import React from 'react';
import { merge } from 'lodash';
import { connect } from 'react-redux';
import NewUserBirthday from './new_user_birthday';
import { signupUser } from '../../actions/session_actions';

class NewUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            birthMonth: "0",
            birthDay: "0",
            birthYear: "0",
            gender: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e, key) {
        this.setState({
            [key]: e.target.value
        });
    }

    handleRadioChange(e) {
        this.setState({
            gender: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const newUser = merge({}, this.state);
        delete newUser.birthMonth;
        delete newUser.birthDay;
        delete newUser.birthYear;
        newUser.birthday = [this.state.birthYear, this.state.birthMonth, this.state.birthDay].join("-");
        this.props.signupUser(newUser);
    }

    render() {
        const selectDays = Array.from(
            { length: 31 },
            (x, index) => <option value={index + 1} key={index}>{index + 1}</option>
        );

        const selectYears = Array.from(
            { length: 115 },
            (x, index) => <option value={(2019 - index)} key={index}>{(2019 - index)}</option>
        );

        return (
            <form className="new-user-form">
                <span>
                    <h2 className="new-user-form-h2">Sign up</h2>
                    <h3 className="new-user-form-h3">It's free and always will be.</h3>
                </span>
                <div className="new-user-form-box">
                    <div className="new-user-form-name-box">
                        <input
                            type="text"
                            className="new-user-name-input"
                            placeholder="First name"
                            onChange={e => this.handleChange(e, "firstName")}
                            value={this.state.firstName}
                        />
                        <input
                            type="text"
                            className="new-user-name-input"
                            placeholder="Last name"
                            onChange={e => this.handleChange(e, "lastName")}
                            value={this.state.lastName}
                        />
                    </div>
                    <input
                        type="text"
                        className="new-user-input"
                        placeholder="Mobile number or email"
                        onChange={e => this.handleChange(e, "email")}
                        value={this.state.email}
                    />
                    <input
                        type="password"
                        className="new-user-input"
                        placeholder="New password"
                        onChange={e => this.handleChange(e, "password")}
                        value={this.state.password}
                    />
                </div>
                <span className="new-user-label">Birthday</span>
                <div className="new-user-birthday">
                    <div className="birthday-inputs">
                        <select
                            className="birthday-select"
                            value={this.state.birthMonth}
                            onChange={e => this.handleChange(e, "birthMonth")}
                        >
                            <option value="0" disabled>Month</option>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                        <select
                            className="birthday-select"
                            value={this.state.birthDay}
                            onChange={e => this.handleChange(e, "birthDay")}
                        >
                            <option value="0" disabled>Day</option>
                            {selectDays}
                        </select>
                        <select
                            className="birthday-select"
                            value={this.state.birthYear}
                            onChange={e => this.handleChange(e, "birthYear")}
                        >
                            <option value="0" disabled>Year</option>
                            {selectYears}
                        </select>
                    </div>
                    <NewUserBirthday />
                </div>
                <div className="new-user-radio" onChange={this.handleRadioChange}>
                    <label><input type="radio" name="gender-radio" value="f" />Female</label>
                    <label><input type="radio" name="gender-radio" value="m" />Male</label>
                </div>
                <p className="sign-up-text">
                    By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.
                    </p>
                <button
                    className="new-user-submit-button"
                    onClick={this.handleSubmit}
                >Sign Up</button>
            </form>
        )
    }
}

const mdp = dispatch => {
    return {
        signupUser: user => dispatch(signupUser(user)),
    }
}

export default connect(null, mdp)(NewUserForm);