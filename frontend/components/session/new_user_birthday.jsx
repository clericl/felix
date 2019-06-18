import React from 'react';
import { Link } from 'react-router-dom';
import { FaQuestionCircle } from 'react-icons/fa';

class NewUserBirthday extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            slow: false,
        }

        this.handleBoxHover = this.handleBoxHover.bind(this);
        this.handleBoxVanish = this.handleBoxVanish.bind(this);
        this.handleOkayClick = this.handleOkayClick.bind(this);
        window.birthdayTimeout = null;
    }

    handleBoxVanish(e) {
        birthdayTimeout = setTimeout(
            () => {
                this.setState({
                    show: false,
                    slow: true,
                });
            },
        500);
    }

    handleBoxHover(e) {
        clearTimeout(birthdayTimeout);
        this.setState({
            show: true,
            slow: true,
        });
    }

    handleOkayClick(e) {
        this.setState({
            show: false,
            slow: false,
        })
    }

    render() {
        const transition = `${this.state.slow ? "slow-" : ""}${this.state.show ? "show" : ""}`
        
        return (
            <>
                <Link
                    to="#"
                    className="new-user-birthday-why"
                    title="Click for more information"
                    onMouseEnter={this.handleBoxHover}
                    onMouseLeave={this.handleBoxVanish}
                >
                    Why do I need to provide my birthday?
                </Link>
                <span
                    className={`hover-box ${transition}`}
                    onMouseEnter={this.handleBoxHover}
                    onMouseLeave={this.handleBoxVanish}
                >
                    <p className="hover-box-text">Providing your birthday helps make sure you get the right Facebook experience for your age. If you want to change who sees this, go to the About section of your profile. For more details, please visit our Data Policy.</p>
                    <button className="hover-box-button" onClick={this.handleOkayClick}>Okay</button>
                </span>
            </>
        )
    }
}

export default NewUserBirthday;