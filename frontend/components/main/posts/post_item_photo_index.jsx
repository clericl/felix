import React from 'react';
import Grid from '@material-ui/core/Grid';

class PostItemPhotoIndex extends React.Component {
    constructor(props) {
        super(props);

        this.renderIndex = this.renderIndex.bind(this);
    }

    renderIndex() {
        const numPhotos = this.props.photos.length;
        switch (numPhotos) {
            case 0:
                return null;
            case 1:
                return (
                    <img className="post-item-photo-free" src={this.props.photos[0]} />
                )
            case 2:
                return (
                    <div className="post-item-photo-index">
                        <img className="post-item-photo-half" src={this.props.photos[0]} />
                        <img className="post-item-photo-half" src={this.props.photos[1]} />
                    </div>
                )
            case 3:
                return (
                    <div className="post-item-photo-index">
                        <img className="post-item-photo-23" src={this.props.photos[0]} />
                        <img className="post-item-photo-13" src={this.props.photos[1]} />
                        <img className="post-item-photo-13" src={this.props.photos[2]} />
                    </div>
                )
            case 4:
                return (
                    <div className="post-item-photo-index">
                        <img className="post-item-photo-quarter" src={this.props.photos[0]} />
                        <img className="post-item-photo-quarter" src={this.props.photos[1]} />
                        <img className="post-item-photo-quarter" src={this.props.photos[2]} />
                        <img className="post-item-photo-quarter" src={this.props.photos[3]} />
                    </div>
                )
            case 5:
                return (
                    <div className="post-item-photo-index">
                        <img className="post-item-photo-23-half" src={this.props.photos[0]} />
                        <img className="post-item-photo-23-half" src={this.props.photos[1]} />
                        <img className="post-item-photo-13" src={this.props.photos[2]} />
                        <img className="post-item-photo-13" src={this.props.photos[3]} />
                        <img className="post-item-photo-13" src={this.props.photos[4]} />
                    </div>
                )
            default:
                return (
                    <div className="post-item-photo-index">
                        <img className="post-item-photo-23-half" src={this.props.photos[0]} />
                        <img className="post-item-photo-23-half" src={this.props.photos[1]} />
                        <img className="post-item-photo-13" src={this.props.photos[2]} />
                        <img className="post-item-photo-13" src={this.props.photos[3]} />
                        <div className="post-item-index-more">
                            <img className="post-item-photo-13" src={this.props.photos[4]} />
                            <div className="post-item-index-more-overlay">+{numPhotos - 4}</div>
                        </div>

                    </div>
                )
        }
    }

    render() {
        if (this.props.photos) {
            return (
                <>
                    {this.renderIndex()}
                </>
            )
        } else {
            return null;
        }
    }
}

export default PostItemPhotoIndex;