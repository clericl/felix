import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';

class PhotoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showOptions: false,
        };
        this.toggleShowOverlay = this.toggleShowOverlay.bind(this);
        this.toggleHideOverlay = this.toggleHideOverlay.bind(this);
    }

    toggleShowOverlay() {
        if (!this.state.showOptions) {
            this.setState({
                showOptions: true,
            });
        }
    }

    toggleHideOverlay() {
        if (this.state.showOptions) {
            this.setState({
                showOptions: false,
            });
        }
    }

    render() {
        return (
            <div
                className="position"
                onMouseEnter={this.toggleShowOverlay}
                onMouseLeave={this.toggleHideOverlay}
            >
                <img
                    className="photo-item"
                    src={this.props.photo.url}
                />
                <div className={`photo-item-overlay ${this.state.showOptions ? "" : "none"}`}>
                    <button className="photos-header-button"><FaPencilAlt /></button>
                    <div className="photo-item-overlay-bottom">
                        <div className="photo-item-overlay-actions"></div>
                        <div className="photo-item-overlay-comment-show-button"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PhotoItem;