import React from 'react';
import { connect } from 'react-redux';
import NewUserBirthday from './new_user_birthday';
import NewUserFormError from './new_user_form_error';
import { signupUser, clearErrors } from '../../../actions/session_actions';

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
            fnameError: false,
            lnameError: false,
            newemailError: false,
            newpasswordError: false,
            birthdayError: false,
            genderError: false,
            fnameBorder: this.props.sessionErrors.includes("fname"),
            lnameBorder: this.props.sessionErrors.includes("lname"),
            newemailBorder: this.props.sessionErrors.includes("newemail"),
            newpasswordBorder: this.props.sessionErrors.includes("newpassword"),
            birthdayBorder: this.props.sessionErrors.includes("birthday"),
            genderBorder: this.props.sessionErrors.includes("gender"),
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleError = this.toggleError.bind(this);
    }

    toggleError(e, key, val) {
        if (this.props.sessionErrors.includes(key)) {
            this.setState({
                [`${key}Error`]: val,
                [`${key}Border`]: !val,
            });
        }
    }

    handleChange(e, key) {
        this.setState({
            [key]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.clearErrors();
        const newUser = this.state;
        newUser.birthday = [this.state.birthYear, this.state.birthMonth, this.state.birthDay].join("-");
        this.props.signupUser(newUser);
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({
                fnameBorder: this.props.sessionErrors.includes("fname"),
                lnameBorder: this.props.sessionErrors.includes("lname"),
                newemailBorder: this.props.sessionErrors.includes("newemail"),
                newpasswordBorder: this.props.sessionErrors.includes("newpassword"),
                birthdayBorder: this.props.sessionErrors.includes("birthday"),
                genderBorder: this.props.sessionErrors.includes("gender"),
            });
        }
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
                    <h2 className="new-user-form-h2">Sign Up</h2>
                    <h3 className="new-user-form-h3">It's free and always will be.</h3>
                </span>
                <div className="new-user-form-box">
                    <div className="new-user-form-name-box">
                        <input
                            type="text"
                            className={`new-user-name-input ${this.state.fnameBorder ? "error-border" : ""}`}
                            placeholder="First name"
                            onChange={e => this.handleChange(e, "firstName")}
                            onFocus={e => this.toggleError(e, "fname", true)}
                            onBlur={e => this.toggleError(e, "fname", false)}
                            value={this.state.firstName}
                        />
                        <NewUserFormError
                            type="fname"
                            text="What's your name?"
                            displayBorder={this.state.fnameBorder}
                            displayError={this.state.fnameError}
                        />
                        <input
                            type="text"
                            className={`new-user-name-input ${this.state.lnameBorder ? "error-border" : ""}`}
                            placeholder="Last name"
                            onChange={e => this.handleChange(e, "lastName")}
                            onFocus={e => this.toggleError(e, "lname", true)}
                            onBlur={e => this.toggleError(e, "lname", false)}
                            value={this.state.lastName}
                        />
                        <NewUserFormError
                            type="lname"
                            text="What's your name?"
                            displayBorder={this.state.lnameBorder}
                            displayError={this.state.lnameError}
                        />
                    </div>
                    <input
                        type="text"
                        className={`new-user-input ${this.state.newemailBorder ? "error-border" : ""}`}
                        placeholder="Mobile number or email"
                        onChange={e => this.handleChange(e, "email")}
                        onFocus={e => this.toggleError(e, "newemail", true)}
                        onBlur={e => this.toggleError(e, "newemail", false)}
                        value={this.state.email}
                    />
                    <NewUserFormError
                        type="newemail"
                        text="You'll use this to log in and if you ever need to reset your password."
                        displayBorder={this.state.newemailBorder}
                        displayError={this.state.newemailError}    
                    />
                    <input
                        type="password"
                        className={`new-user-input ${this.state.newpasswordBorder ? "error-border" : ""}`}
                        placeholder="New password"
                        onChange={e => this.handleChange(e, "password")}
                        onFocus={e => this.toggleError(e, "newpassword", true)}
                        onBlur={e => this.toggleError(e, "newpassword", false)}
                        value={this.state.password}
                    />
                    <NewUserFormError
                        type="newpassword"
                        text="Enter a combination of at least six numbers, letters and punctuation marks (like ! and &)."
                        displayBorder={this.state.newpasswordBorder}
                        displayError={this.state.newpasswordError}
                    />
                </div>
                <span className="new-user-label">Birthday</span>
                <div className="new-user-birthday">
                    <div className="birthday-inputs">
                        <select
                            className={`birthday-select ${this.state.birthdayBorder ? "error-border" : ""}`}
                            value={this.state.birthMonth}
                            onChange={e => this.handleChange(e, "birthMonth")}
                            onFocus={e => this.toggleError(e, "birthday", true)}
                            onBlur={e => this.toggleError(e, "birthday", false)}
                        >
                            <option value="0" disabled>Month</option>
                            <option value="1">Jan</option>
                            <option value="2">Feb</option>
                            <option value="3">Mar</option>
                            <option value="4">Apr</option>
                            <option value="5">May</option>
                            <option value="6">Jun</option>
                            <option value="7">Jul</option>
                            <option value="8">Aug</option>
                            <option value="9">Sep</option>
                            <option value="10">Oct</option>
                            <option value="11">Nov</option>
                            <option value="12">Dec</option>
                        </select>
                        <select
                            className={`birthday-select ${this.state.birthdayBorder ? "error-border" : ""}`}
                            value={this.state.birthDay}
                            onChange={e => this.handleChange(e, "birthDay")}
                            onFocus={e => this.toggleError(e, "birthday", true)}
                            onBlur={e => this.toggleError(e, "birthday", false)}
                        >
                            <option value="0" disabled>Day</option>
                            {selectDays}
                        </select>
                        <select
                            className={`birthday-select ${this.state.birthdayBorder ? "error-border" : ""}`}
                            value={this.state.birthYear}
                            onChange={e => this.handleChange(e, "birthYear")}
                            onFocus={e => this.toggleError(e, "birthday", true)}
                            onBlur={e => this.toggleError(e, "birthday", false)}
                        >
                            <option value="0" disabled>Year</option>
                            {selectYears}
                        </select>
                    </div>
                    <NewUserFormError
                        type="birthday"
                        text="Select your birthday. You can change who can see this later."
                        displayBorder={this.state.birthdayBorder}
                        displayError={this.state.birthdayError}
                    />
                    <NewUserBirthday />
                </div>
                <span className="new-user-label">Gender</span>
                <div className="new-user-radio" onChange={e => this.handleChange(e, "gender")}>
                    <label className={`gender-radio-box ${this.state.genderBorder ? "error-border" : ""}`}><input
                        type="radio"
                        name="gender-radio"
                        value="f"
                        onFocus={e => this.toggleError(e, "gender", true)}
                        onBlur={e => this.toggleError(e, "gender", false)}
                    />Female</label>
                    <label className={`gender-radio-box ${this.state.genderBorder ? "error-border" : ""}`}><input
                        type="radio"
                        name="gender-radio"
                        value="m"
                        onFocus={e => this.toggleError(e, "gender", true)}
                        onBlur={e => this.toggleError(e, "gender", false)}
                    />Male</label>
                </div>
                <NewUserFormError
                    type="gender"
                    text="Please choose a gender. You can change who can see this later."
                    displayBorder={this.state.genderBorder}
                    displayError={this.state.genderError}
                />
                <p className="new-user-sign-up-text">
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

const msp = state => {
    return {
        sessionErrors: state.errors.sessions,
    }
}

const mdp = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors()),
        signupUser: user => dispatch(signupUser(user)),
    }
}

export default connect(msp, mdp)(NewUserForm);