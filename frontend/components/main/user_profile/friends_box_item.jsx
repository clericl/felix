import React from 'react';
import { Link } from 'react-router-dom';

const FriendsBoxItem = props => {
    const itemStyle = {
        backgroundColor: white,
        backgroundImage: props.user.defaultImgUrl,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };
    
    const displayName = [
        this.props.user.firstName,
        this.props.user.lastName
    ].join(" ");

    return (
        <li>
            <Link
                to={`/users/${this.props.user.id}`}
                className="friends-box-item"
                style={itemStyle}
            >
                <p>{displayName}</p>
            </Link>
        </li>
    )
}

export default FriendsBoxItem;