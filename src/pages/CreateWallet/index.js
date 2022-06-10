import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { data } from '@/data';
import { generalPhrase, generalPhrase2, generalPhrase3 } from '@/utils/generalData';
import { ReactComponent as ArrowLeft } from '@/assets/icons/left.svg';
import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';
import StepThree from './Steps/StepThree';

function CreateWallet() {
    const [step, setStep] = useState(1);
    const [phrase24, setPhrase24] = useState([]);
    const [phrase18, setPhrase18] = useState([]);
    const [phrase6, setPhrase6] = useState([]);
    useEffect(() => {
        const data24 = generalPhrase(data, 24);
        const data18 = generalPhrase3(data24, 18);
        setPhrase24(data24);
        setPhrase18(data18);
        setPhrase6(generalPhrase2([...data18], 3))
    }, []);



    const renderStep = (step) => {
        switch (step) {
            case 1:
                return <StepOne phrase24={phrase24} setStep={setStep} />
            case 2:
                return <StepTwo  phrase18={phrase18} setStep={setStep} />
            case 3:
                return <StepThree  phrase6={phrase6} setStep={setStep} />
        }
    }
    return (
        <div className="flex flex-col h-screen">
            <div className="p-5">
                <h4 className="flex items-center">
                    <ArrowLeft />
                    <span className="text-black-dark font-san500 text-[17px] ml-2">Create New Wallet</span>
                </h4>
            </div>
            { renderStep(step) }
        </div>
    );
}

export default CreateWallet;
