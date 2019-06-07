import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';

class PhotoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <img className="photo-item" src={this.props.image.url} />
                <div className="photo-item-overlay">
                    <button className="photos-header-button"><FaPencilAlt /></button>
                    <div className="photo-item-overlay-bottom">
                        <div className="photo-item-overlay-actions"></div>
                        <div className="photo-item-overlay-comment-show-button"></div>
                    </div>
                </div>
            </>
        )
    }
}

export default PhotoItem;