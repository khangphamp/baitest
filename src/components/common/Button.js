import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
    const { children, onClick, disable } = props;
    return (
        <button
            onClick={onClick}
            className={`w-full h-14 font-san700 rounded-xl ${
                disable ? 'bg-[#BBCFFB]' : 'bg-blue'
            } text-white uppercase`}
        >
            {children}
        </button>
    );
}

Button.propTypes = {};

export default Button;
