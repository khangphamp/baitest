import React, { useEffect, useMemo, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from '@/components/common/Button';
import { ReactComponent as Copy } from '@/assets/icons/copy.svg';
import PopupSavedToClipboard from '@/components/Popup/SavedToClipboard';
function StepOne({phrase24, setStep}) {
  const [onCopy, setOnCopy] = useState(false);
  const HanldeGetValueName = useMemo(() => phrase24.map(i => i.name).join(' '))
  return (
    <div className="flex flex-col h-screen">
            <div className="flex-1 p-5">
                <div className="">
                    <h4 className="font-san500 text-[17px] text-blue">Auto Gen Seed Phrase?</h4>
                    <div className="wrap-phrases mt-2 py-2 grid grid-cols-3 gap-3 rounded-md">
                        {phrase24.map((item) => (
                            <div key={item.index} className="px-2 py-[6px] shadow-type1 flex gap-2 rounded-md">
                                <div className="w-5 h-5 font-san500 text-[11px] text-blue bg-blue-light rounded-full flex justify-center items-center">
                                    {item.index}
                                </div>
                                <span className="text-black-dark text-[15px]">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-3 flex">
                    <span className="flex-1">
                        Tap to Copy or Carefully write down your seed phrase and store it in a safe place
                    </span>
                    <CopyToClipboard text={HanldeGetValueName} onCopy={() => setOnCopy(true)}>
                        <div className="w-12 h-12 flex justify-center items-center border-[1px] border-blue rounded-xl cursor-pointer">
                            <Copy className="fill-blue" />
                        </div>
                    </CopyToClipboard>
                </div>
            </div>

            <div className="w-full h-[170px] bg-white py-8 flex flex-col justify-between p-5 shadow-type1">
                <h4 className="text-black-dark font-san500 text-[17px]">How does this work?</h4>
                <Button onClick={() => setStep(2)} className="text-black-dark font-san700 text-[17px]">Next Phrase18 </Button>
            </div>

            <PopupSavedToClipboard onCopy={onCopy} setOnCopy={setOnCopy} />
        </div>
  )
}

export default StepOne