import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e, key) {
        this.setState({
            [key]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.loginUser(this.state);
    }

    render() {
        return (
            <div className="header-form">
                <form className="header-inputs">
                    <div className="header-input-box">
                        <label className="header-label">Email or Phone</label>
                        <input
                            type="text"
                            className="header-input"
                            onChange={e => this.handleChange(e, "email")}
                            value={this.state.email}
                        />
                    </div>
                    <div className="header-input-box">
                        <label className="header-label">Password</label>
                        <input
                            type="password"
                            className="header-input"
                            onChange={e => this.handleChange(e, "password")}
                            value={this.state.password}
                        />
                    </div>
                </form>
                <button
                    className="header-submit-button"
                    onClick={this.handleSubmit}
                >Log In</button>
            </div>
        )
    }
}

export default SessionForm;