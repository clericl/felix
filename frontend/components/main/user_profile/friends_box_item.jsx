import React from 'react';
import { Link } from 'react-router-dom';

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
        if (this.props.user) {
            const itemStyle = {
                backgroundImage: `url(${this.props.user.defaultImgUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            };
    
            const displayName = [
                this.props.user.firstName,
                this.props.user.lastName
            ].join(" ");
    
            return (
                <li className="friends-box-item" style={itemStyle}>
                    <Link to={`/users/${this.props.user.id}`} className="friends-box-item">
                        <p>{displayName}</p>
                    </Link>
                </li>
            )
        } else {
            return null;
        }
    }
}
    

export default FriendsBoxItem;