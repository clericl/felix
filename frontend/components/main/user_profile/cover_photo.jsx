import React from 'react';

const CoverPhoto = props => {
    const coverPhotoStyle = {
        backgroundImage: "linear-gradient(#08080800, #08080800, #08080826, #080808b8), url(https://www.preparedfoods.com/ext/resources/images/2018/12/HoneyFrostedFlakes_900.jpg?1546641534)",
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