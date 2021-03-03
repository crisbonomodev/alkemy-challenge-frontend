import React from 'react';
import { useSelector } from 'react-redux';

export const BalanceEntry = () => {

    const {balance: balanceData} = useSelector(state => state.balance)
    let balance =0;

        if(balanceData !== [])
        {
            balanceData.map(balanceItem => balance = balanceItem.balance);
        }
        return (
            <div>
                <h1>Balance: $ {balance} </h1>
            </div>
        )
};
