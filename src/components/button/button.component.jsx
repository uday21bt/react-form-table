import React from 'react';
import './button.styles.scss';

function Button({ buttonText, buttonType, type, ...otherProps }) {
    const BUTTON_TYPE_CLASS = {
        regular: 'regular',
        green: 'green',
        lighter: 'lighter',
    }

    return (
        <button 
            className={`button-container ${BUTTON_TYPE_CLASS[buttonType]}`} 
            type={type} 
            {...otherProps} 
        >
            {buttonText}
        </button>
    )
}

export default Button;
