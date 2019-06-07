import React from 'react';
import { connect } from 'react-redux';
import PhotosIndex from './photos_index';
import PhotosHeader from './photos_header';
import { withRouter } from 'react-router-dom';

class PhotosMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.pageUser.id) {
            return (
                <div className="photos-content">
                    <PhotosHeader />
                    <PhotosIndex />
                </div>
            
            )
        } else {
            return null;
        }
    }
}

const msp = (state, ownProps) => {
    return {
        pageUser: state.entities.users[ownProps.match.params.userId],
    }
}

export default withRouter(connect(msp, null)(PhotosMain));