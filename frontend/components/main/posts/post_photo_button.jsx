import React from 'react';
import { FaRegImage } from 'react-icons/fa';

class PostPhotoButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: [],
            imageFile: [],
        }
        this.fileInputRef = React.createRef();
        this.openFileDialog = this.openFileDialog.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.renderPreview = this.renderPreview.bind(this);
    }

    openFileDialog() {
        this.fileInputRef.current.click();
    }

    handleFile(e) {
        const files = e.currentTarget.files;

        const readAndPreview = file => {
            if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
                const fileReader = new FileReader();
                fileReader.onloadend = () => {
                    this.setState({
                        imageUrl: this.state.imageUrl.concat(fileReader.result),
                        imageFile: this.state.imageFile.concat(file)
                    })
                }
                fileReader.readAsDataURL(file);
            }
        }
        
        if (files) {
            Array.from(files).forEach(file => readAndPreview(file));
        }
    }

    componentDidUpdate() {
        const body = document.getElementById("post-box");

        if (this.state.imageUrl.length === 1 && body) {
            body.setAttribute("placeholder", "Say something about this photo...")
        } else if (this.state.imageUrl.length > 1 && body) {
            body.setAttribute("placeholder", "Say something about these photos...")
        } else if (body && this.props.placeholder) {
            body.setAttribute("placeholder", this.props.placeholder)
        }
    }

    renderPreview() {
        const previews = this.state.imageUrl.map((image, index) =>
            <img className="post-photo-preview" src={image} key={index} />
        )

        const dragZone = <div className="post-photo-drag-zone" onClick={this.openFileDialog}>+</div>

        if (previews.length > 0) {
            return (
                <div className="post-photo-preview-index">
                    {previews}
                    {dragZone}
                </div>
            )
        } else {
            return null;
        }
    }

    render() {
        return (
            <>
                {this.renderPreview()}
                <div className="post-add-photo-button" onClick={this.openFileDialog}>
                    <FaRegImage className="post-add-photo-icon" />&nbsp;Photo
                    <input
                        type="file"
                        id="photo"
                        ref={this.fileInputRef}
                        className="none"
                        onChange={this.handleFile}
                        multiple
                    />
                </div>
            </>
        )
    }
}

export default PostPhotoButton;