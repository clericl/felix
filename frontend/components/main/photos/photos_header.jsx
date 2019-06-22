import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { MdPhotoLibrary } from 'react-icons/md';
import { submitPhoto } from '../../../actions/photo_actions';

class PhotosHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageFile: null,
        };
        this.fileInputRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.openFileDialog = this.openFileDialog.bind(this);
    }

    openFileDialog() {
        this.fileInputRef.current.click();
    }

    handleSubmit() {
        if (this.fileInputRef.current.files[0]) {
            const formData = new FormData();
            formData.append('photo[photoable_type]', "User");
            formData.append('photo[photoable_id]', this.props.pageUser.id);
            formData.append('photo[photo]', this.fileInputRef.current.files[0]);
            
            this.props.submitPhoto(formData);
        }
    }

    render() {
        return (
            <div className="photos-header">
                <div className="photos-header-top">
                    <div className="photos-header-title">
                        <MdPhotoLibrary className="photos-header-icon" />&nbsp;Photos
                    </div>
                    <div className="photos-header-buttons">
                        <button
                            className="photos-header-button"
                            onClick={this.openFileDialog}
                        >Add Photo</button>
                        <input
                            type="file"
                            ref={this.fileInputRef}
                            className="none"
                            onChange={this.handleSubmit}
                        />
                    </div>
                </div>
                <div className="photos-header-tabs">
                    <p className="photos-header-tab-selected">Your Photos</p>
                </div>
            </div>
        )
    }
}

const msp = (state, ownProps) => {
    return {
        pageUser: state.entities.users[ownProps.match.params.userId],
    }
}

const mdp = dispatch => {
    return {
        submitPhoto: photo => dispatch(submitPhoto(photo)),
    }
}

export default withRouter(connect(msp, mdp)(PhotosHeader));