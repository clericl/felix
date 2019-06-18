import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

const NewUserFormError = ({ type, text, displayBorder, displayError }) => {
    return (
        <div className="error-bounds">
            <FaExclamationCircle
                className={`error-icon ${type}-error-icon`}
                style={displayBorder ? {} : { display: "none" }}
            />
            <div
                className={`error-box ${type}-error-box`}
                style={displayError ? {} : { display: "none" }}
            >
                <p>{text}</p>
            </div>
        </div>
    )
}

export default NewUserFormError;