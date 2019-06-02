import React from 'react';
import { Redirect } from 'react-router-dom';

class FriendsBoxItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectId: null,
            fireRedirect: false,
        };
    }

    componentDidUpdate() {
        if (this.state.fireRedirect) {
            this.setState({
                fireRedirect: false,
            });
        }
    }

    render() {
        if (this.state.fireRedirect) {
            return (
                <Redirect to={`/users/${this.state.redirectId}`} />
            )
        } else {
            const itemStyle = {
                backgroundImage: `url(${window.catvatarUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            };
    
            const displayName = [
                this.props.user.firstName,
                this.props.user.lastName
            ].join(" ");
    
            return (
                <li className="friends-box-item" style={itemStyle}>
                    {/* <img className="friends-box-item-pic" src={window.catvatarUrl} /> */}
                    <p>{displayName}</p>
                </li>
            )
        }
    }
}
    

export default FriendsBoxItem;