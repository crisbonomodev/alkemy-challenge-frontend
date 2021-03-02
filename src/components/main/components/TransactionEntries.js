import React from 'react';
import { useSelector } from 'react-redux';
import { TransactionEntry } from './TransactionEntry';

export const TransactionEntries = () => {

    const {transactions} = useSelector(state => state.transaction);

    if(transactions)
    {
        return (
            <div className="container">
                {
                    transactions.map(transaction => (
                        <TransactionEntry key={transaction.id} 
                        {...transaction} />
                    ))
                }
            </div>
        )
    }
    else
    {
        return(
            <div>
                <h1>No hay transacciones</h1>
            </div>
        )
    }
}
