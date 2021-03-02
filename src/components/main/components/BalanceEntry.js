import React from 'react'
import { useSelector } from 'react-redux'

export const BalanceEntry = () => {

    const {balance} = useSelector(state => state.balance);

    const {balance: amount} = balance;

    return (
        <div>
            <h1>Balance: $ {amount} </h1>
        </div>
    )
}
