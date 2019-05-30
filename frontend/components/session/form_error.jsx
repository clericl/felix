import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

const FormError = props => {
    return (
        <div className="error-bounds">
            <FaExclamationCircle
                className={`error-icon ${props.type}-error-icon`}
                style={props.displayBorder ? {} : { visibility: "hidden" }}
            />
            <div
                className={`error-box ${props.type}-error-box`}
                style={props.displayError ? {} : { visibility: "hidden" }}
            >
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default FormError;