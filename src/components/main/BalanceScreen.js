import React from 'react'
import { useSelector } from 'react-redux';
import { AddNewFab } from '../ui/AddNewFab';
import { BalanceEntry } from './components/BalanceEntry';
import { TransactionEntries } from './components/TransactionEntries';

export const BalanceScreen = () => {


    

    return (
        <div>
            <BalanceEntry />
            <div className="container-md container-style">
            <TransactionEntries />
            <AddNewFab />
            </div>
        </div>
    )
}
