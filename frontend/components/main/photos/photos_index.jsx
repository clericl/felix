import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPhotos } from '../../../actions/photo_actions';
import PhotoItem from './photo_item';

class PhotosIndex extends React.Component {
    constructor(props) {
        super(props);
        this.renderPhotoItems = this.renderPhotoItems.bind(this);
    }

    componentDidMount() {
        this.props.fetchPhotos(this.props.match.params.userId, "User");
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.props.fetchPhotos(this.props.match.params.userId, "User");
        }
    }

    renderPhotoItems() {
        return this.props.receivedPhotos.map(photo => {
            return <PhotoItem photo={photo} />
        });
    }

    render() {
        return (
            <ul className="photos-index">
                {this.renderPhotoItems()}
            </ul>
        )
    }
}

const msp = (state, ownProps) => {
    return {
        receivedPhotos: Object.values(state.entities.photos).filter(
            photo => photo.photoableId == ownProps.match.params.userId
        )
    }
}

const mdp = dispatch => {
    return {
        fetchPhotos: (id, type) => dispatch(fetchPhotos(id, type)),
    }
}

export default withRouter(connect(msp, mdp)(PhotosIndex));