import React from 'react';
import { Navbar } from '../auth/components/Navbar';
import { BalanceScreen } from './BalanceScreen';
import { TransactionModal } from './components/TransactionModal';

export const MainScreen = () => {
    return (
        <div>
            <Navbar />
            <BalanceScreen />
            <TransactionModal />
        </div>
    )
}
