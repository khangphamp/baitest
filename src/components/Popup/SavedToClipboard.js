import React, { useEffect, useState } from 'react';

import LayoutPopup from '../common/LayoutPopup';
import { ReactComponent as Copy } from '@/assets/icons/copy.svg';
function SavedToClipboard(props) {
    const { onCopy, setOnCopy } = props;
    const [open, setOpen] = useState(false);
    const [timer, setTimer] = useState(2);
    const handleClose = () => {
        setOpen(false);
        setOnCopy(false);
    };
    useEffect(() => {
        var time;
        if (onCopy) {
            setOpen(true);
            setTimer(2);
            time = setInterval(() => {
                setTimer((prev) => {
                    if (prev <= 0) {
                        clearInterval(time);
                        handleClose();
                        return;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            clearInterval(time);
        };
    }, [onCopy]);

    return (
        <LayoutPopup onOpen={open} handleClose={handleClose}>
            <div className="flex flex-col justify-between items-center p-5 gap-5">
                <div className="w-12 h-12 flex justify-center items-center border-[1px] border-green bg-green rounded-full pointer">
                    <Copy className="fill-white w-5 h-6" />
                </div>
                <h4 className="text-black-dark font-san700 text-[22px]">Saved to clipboard</h4>
                <span className="text-[#FF0366] border-[#FF0366] border-[1px] rounded-full w-5 h-5 text-xs flex justify-center items-center">
                    {timer}s
                </span>
            </div>
        </LayoutPopup>
    );
}

export default SavedToClipboard;
