import React from 'react';
import IntroBoxBio from './intro_box_bio';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { GiHouse } from 'react-icons/gi';
import {
    FaGlobeAmericas,
    FaBriefcase,
    FaGraduationCap,
    FaMapMarkerAlt
} from 'react-icons/fa';

class IntroBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.pageUser) {
            const { school, title, workplace, hometown, currentCity } = this.props.pageUser;

            const schoolP = school ? (
                <p className="profile-intro-box-item">
                    <FaGraduationCap className="profile-intro-icon" />Studied at {school}
                </p>
            ) : null;
            const workP = (title && workplace) ? (
                <p className="profile-intro-box-item">
                    <FaBriefcase className="profile-intro-icon" />{title} at {workplace}
                </p>
            ) : null;
            const currentCityP = currentCity ? (
                <p className="profile-intro-box-item">
                    <GiHouse className="profile-intro-icon" />Lives in {currentCity}
                </p>
            ) : null;
            const hometownP = hometown ? (
                <p className="profile-intro-box-item">
                    <FaMapMarkerAlt className="profile-intro-icon" />From {hometown}
                </p>
            ) : null;

            return (
                <div className="profile-friends-box">
                    <div className="profile-friends-box-header">
                        <FaGlobeAmericas className="profile-intro-header-icon" />
                        <p className="profile-friends-box-link">
                            Intro
                        </p>
                    </div>
                    <ul className="intro-box-ul">
                        <li>
                            <IntroBoxBio />
                        </li>
                    </ul>
                    <ul className="intro-box-ul">
                        <li className={workP ? "profile-intro-box-item" : "none"}>
                            {workP}
                        </li>
                        <li className={schoolP ? "profile-intro-box-item" : "none"}>
                            {schoolP}
                        </li>
                        <li className={currentCityP ? "profile-intro-box-item" : "none"}>
                            {currentCityP}
                        </li>
                        <li className={hometownP ? "profile-intro-box-item" : "none"}>
                            {hometownP}
                        </li>
                    </ul>
                </div>
            )
        } else {
            return null;
        }
    }
}

const msp = (state, ownProps) => {
    return {
        pageUser: state.entities.users[ownProps.match.params.userId] || { id: null, friends: [] },
    }
}

export default withRouter(connect(msp, null)(IntroBox));