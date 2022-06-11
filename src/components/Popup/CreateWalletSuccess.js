import React, { useEffect, useMemo, useState } from 'react';

import LayoutPopup from '../common/LayoutPopup';
import { ReactComponent as Check } from '@/assets/icons/check.svg';
import Button from '../common/Button';
function CreateWalletSuccess({ onOpen, setOnOpen }) {
    const [check, setCheck] = useState([false, false, false]);

    const isPass = useMemo(() => {
        return !check.every((i) => i == true);
    }, [check]);

    const HandleCheck = (num) => {
        const newCheck = [...check];
        newCheck[num] = !newCheck[num];
        setCheck(newCheck);
    };
    return (
        <LayoutPopup onOpen={onOpen} handleClose={() => setOnOpen(false)}>
            <div className="flex flex-col justify-between items-center p-5 gap-5">
                <Check className="fill-white" />
                <h4 className="text-black-dark font-san700 text-[22px]">Your wallet has been created!</h4>
            </div>
            <div className="px-3">
                <div class="flex p-4 items-start">
                    <input
                        type="checkbox"
                        value={check[0]}
                        onChange={() => HandleCheck(0)}
                        class="checkbox w-6 h-6 text-red-600 bg-gray-100 rounded-full border-gray-300 appearance-none border-blue 
                        border-[1px] checked:bg-blue flex "
                    />
                    <div class="ml-2 flex-1 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Metanode cannot recover your seed phrase. You should back up your seed phrase and keep it safe,
                        it’s your responsibility.
                    </div>
                </div>
                <div class="flex p-4 items-start">
                    <input
                        type="checkbox"
                        value={check[1]}
                        onChange={() => HandleCheck(1)}
                        class="checkbox w-6 h-6 text-red-600 bg-gray-100 rounded-full border-gray-300 appearance-none border-blue 
                        border-[1px] checked:bg-blue flex "
                    />
                    <div class="ml-2 flex-1 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Your transaction data is one of the most important security keys which is needed for every
                        incurred transaction. You should back up your data automatically and secure back up file with a
                        strong pasword.
                    </div>
                </div>
                <div class="flex p-4 items-start">
                    <input
                        type="checkbox"
                        value={check[3]}
                        onChange={() => HandleCheck(2)}
                        class="checkbox w-6 h-6 text-red-600 bg-gray-100 rounded-full border-gray-300 appearance-none border-blue 
                        border-[1px] checked:bg-blue flex "
                    />
                    <div class="ml-2 flex-1 text-sm font-medium text-gray-900 dark:text-gray-300">
                        To keep your backup file safe, you should also keep secret your back up location and secure it.
                    </div>
                </div>
                <Button disable={isPass} className="text-black-dark font-san700 text-[17px] px-3 bg-#BBCFFB">
                    i understand
                </Button>
            </div>
        </LayoutPopup>
    );
}

export default CreateWalletSuccess;
