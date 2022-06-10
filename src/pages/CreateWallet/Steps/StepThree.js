import React, { useEffect, useState } from 'react';
import Button from '@/components/common/Button';
import CreateWalletSuccess from '@/components/Popup/CreateWalletSuccess';
function StepThree({ phrase6, setStep }) {
    const [onCopy, setOnCopy] = useState(false);
    return (
        <div className="flex flex-col h-screen">
            <div className="flex-1 p-5">
                <div className="">
                    <h4 className="font-san500 text-[17px] text-blue">Auto Gen Seed Phrase?</h4>
                    <div className="wrap-phrases mt-2 py-2 grid grid-cols-1 gap-3 rounded-md">
                        {phrase6.map((items, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center px-3 py-4  shadow-type1 flex gap-2 rounded-md"
                            >
                                <div className="w-6 h-6 font-san500 text-[11px] text-blue border-[1px] rounded-full flex justify-center items-center">
                                    {items.primaryIndex}
                                </div>
                                {items.values.map((item, i) => (
                                    <div
                                        key={i}
                                        className={`text-black-dark text-[15px] py-[6px] px-3 rounded-[6px] ${
                                            items.primaryIndex === item.index && 'bg-[#BBCFFB]'
                                        }`}
                                    >
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full h-[170px] bg-white py-8 flex flex-col justify-between p-5 shadow-type1">
                <h4 className="text-black-dark font-san500 text-[17px]">How does this work?</h4>
                <Button onClick={() => setStep(3)} className="text-black-dark font-san700 text-[17px]">
                    Submit
                </Button>
            </div>
            <CreateWalletSuccess />
        </div>
    );
}

export default StepThree;
