import React from 'react';

class PhotosIndex extends React.Component {
    constructor(props) {
        super(props);
        // this.renderPhotoItems = this.renderPhotoItems.bind(this);
    }

    // renderPhotoItems() {
    //     return this.props.receivedPhotos.map(photo => {
    //         return <PhotoItem photo={photo} />
    //     });
    // }

    render() {
        return (
            <ul className="photos-index">
                {/* {this.renderPhotoItems()} */}
            </ul>
        )
    }
}

export default PhotosIndex;