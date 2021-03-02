import React from 'react'
import { TransactionEntries } from './components/TransactionEntries';

export const BalanceScreen = () => {


    return (
        <div>
            <h1>Balance</h1>
            <div className="container-md">
            <TransactionEntries />
            </div>
        </div>
    )
}
