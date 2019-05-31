import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ProfileButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myUser: {
                id: "",
                firstName: "",
                avatarUrl: "",
            }
        };
    }

    componentDidUpdate(prevProps) {
        if (this.state.myUser.id != this.props.currentUser) {
            this.setState({
                myUser: this.props.myUser,
            });
        }
    }

    render() {
        return (
            <button className="nav-button" id="profile-button">
                {/* <img className="profile-photo-icon" src={this.state.myUser.avatarUrl} /> */}
                <img className="profile-photo-nav-icon" src="https://www.nydailynews.com/resizer/EfzByiVBnuJkjD_ip1WAJGDOQMU=/800x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/4HDSW6YT777BLGN7SBPHL7STMM.jpg" />
                {this.state.myUser.firstName}
            </button>
        )
    }
}

const msp = state => {
    return {
        currentUser: state.session.currentUser,
        myUser: state.entities.users[state.session.currentUser] || {id: ""},
    };
};

export default withRouter(connect(msp, null)(ProfileButton));