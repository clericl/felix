import React from 'react';
import Grid from '@material-ui/core/Grid';

class PostItemPhotoIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.photos) {
            return (
                <Grid container spacing={3} direction="column" class="post-item-photo-index">
                    {this.props.photos.map(photo => <img className="post-item-photo-item" src={photo} />)}
                </Grid>
            )
        } else {
            return null;
        }
    }
}

export default PostItemPhotoIndex;