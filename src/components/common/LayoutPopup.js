import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Down } from '@/assets/icons/down.svg';
function LayoutPopup(props) {
    const { children, onOpen, handleClose } = props;
    return (
        <div className={`${onOpen && 'fixed bottom-0 top-0 left-0 right-0 bg-[#000] bg-opacity-50'}`}>
            <div
                className={`w-full h-auto bg-white fixed bottom-0 rounded-t-2xl shadow-type1 transition-all duration-500 
                ${onOpen ? 'visible translate-y-0' : 'invisible translate-y-full'}`}
            >
                <div onClick={handleClose} className="flex flex-col justify-between items-center pt-2 cursor-pointer">
                    <Down />
                </div>
                {children}
            </div>
        </div>
    );
}

LayoutPopup.propTypes = {};

export default LayoutPopup;
