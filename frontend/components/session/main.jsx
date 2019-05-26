import React from 'react';

class Main extends React.Component {
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

    handleRadioChange(e, val) {
        this.setState({
            gender: val
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.loginUser(this.state);
    }

    render() {
        const selectDays = Array.from(
            {length: 31},
            (x, index) => <option value={index + 1} key={index}>{index + 1}</option>
        );

        const selectYears = Array.from(
            { length: 115 },
            (x, index) => <option value={index} key={index}>{(2019 - index)}</option>
        );

        return (
            <main className="session-main">
                <section className="session-content">
                    <h2 className="session-h2">Connect with friends and the world around you on felix.</h2>
                    <div className="session-text"><img src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.2365-6/32213527_1720875981299142_7601737152052854784_n.png?_nc_cat=1&_nc_ht=scontent-lga3-1.xx&oh=0b20e6e14e749a98340202f00140bb83&oe=5D65CEE8" /><strong className="strong">See photos and updates  </strong> from friends in News Feed.</div>
                    <div className="session-text"><img src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.2365-6/32220240_200651090730619_3989834943638274048_n.png?_nc_cat=1&_nc_ht=scontent-lga3-1.xx&oh=0102726453b4ec84c333ab158255b1c0&oe=5D653A36" /><strong className="strong">Share what's new  </strong> in your life on your Timeline.</div>
                    <div className="session-text"><img src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.2365-6/32158113_191365994837162_5605369115159035904_n.png?_nc_cat=106&_nc_ht=scontent-lga3-1.xx&oh=e89952daf8c051cf371e3178ec5e9f0c&oe=5D9C64B5" /><strong className="strong">Find more  </strong> of what you're looking for with Facebook Search.</div>
                </section>
                <form className="new-user-form">
                    <span>
                        <h2 className="new-user-form-h2">Sign up</h2>
                        <h3 className="new-user-form-h3">It's free and always will be.</h3>
                    </span>
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
                    <div className="new-user-birthday">
                        <label className="new-user-label">Birthday</label>
                        <br></br>
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
                    <div>
                        <label><input
                                    type="radio"
                                    onChange={e => this.handleRadioChange(e, "m")}
                                />Male</label>
                        <label><input
                                    type="radio"
                                    onChange={e => this.handleRadioChange(e, "f")}
                                />Female</label>
                    </div>
                    <button
                        className="new-user-submit-button"
                        onClick={this.handleSubmit}
                    >Sign Up</button>
                </form>
            </main>
        )
    }
}

export default Main;