import React from 'react';

const CoverPhoto = props => {
    const coverPhotoStyle = {
        backgroundImage: `linear-gradient(#08080800, #08080800, #08080826, #080808b8), url(${props.pageUser.coverPhotoUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        boxShadow: "inset 0px 0px 1px 1px #989898a8",
    };

    return (
        <>
            <div className="cover-photo" style={coverPhotoStyle}></div>
        </>
    )
}

export default CoverPhoto;