import React from 'react';
import { Link } from 'react-router-dom';

class NewUserBirthday extends React.Component {
    constructor(props) {
        super(props);
        this.handleLinkHover = this.handleLinkHover.bind(this);
        this.handleBoxHover = this.handleBoxHover.bind(this);
        this.handleBirthdayVanish = this.handleBirthdayVanish.bind(this);
        this.handleOkayClick = this.handleOkayClick.bind(this);
        window.birthdayTimeout = null;
    }

    handleLinkHover(e) {
        e.preventDefault();
        const hoverBox = document.getElementsByClassName("hover-box")[0];
        hoverBox.classList.add("slow-show");
        hoverBox.classList.remove("hidden", "slow-hidden");
    }

    handleBirthdayVanish(e) {
        e.preventDefault();
        const hoverBox = document.getElementsByClassName("hover-box")[0];
        birthdayTimeout = setTimeout(
            () => {
                hoverBox.classList.add("slow-hidden");
                hoverBox.classList.remove("slow-show");
            },
        500);
    }

    handleBoxHover(e) {
        e.preventDefault();
        clearTimeout(birthdayTimeout);
        const hoverBox = document.getElementsByClassName("hover-box")[0];
        hoverBox.classList.remove("hidden", "slow-hidden");
        hoverBox.classList.add("slow-show");
    }

    handleOkayClick(e) {
        e.target.parentElement.classList.remove("slow-show");
        e.target.parentElement.classList.add("hidden");
    }

    render() {
        return (
            <>
                <Link
                    to="#"
                    className="new-user-birthday-why"
                    title="Click for more information"
                    onMouseEnter={this.handleLinkHover}
                    onMouseLeave={this.handleBirthdayVanish}
                >
                    Why do I need to provide my birthday?
                </Link>
                <span
                    className="hover-box"
                    onMouseEnter={this.handleBoxHover}
                    onMouseLeave={this.handleBirthdayVanish}
                >
                    <p className="hover-box-text">Providing your birthday helps make sure you get the right Facebook experience for your age. If you want to change who sees this, go to the About section of your profile. For more details, please visit our Data Policy.</p>
                    <button className="hover-box-button" onClick={this.handleOkayClick}>Okay</button>
                </span>
            </>
        )
    }
}

export default NewUserBirthday;