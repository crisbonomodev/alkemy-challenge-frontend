import React from 'react'
import { AddNewFab } from '../ui/AddNewFab';
import { TransactionEntries } from './components/TransactionEntries';

export const BalanceScreen = () => {


    return (
        <div>
            <h1>Balance</h1>
            <div className="container-md container-style">
            <TransactionEntries />
            <AddNewFab />
            </div>
        </div>
    )
}
