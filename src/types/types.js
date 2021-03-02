

export const types = {
    //Login
    authChecking: '[auth] Checking login state',
    authCheckingFinish: '[auth] Finish checking login state',
    authStartLogin: '[auth] Start login',
    authLogin: '[auth] Login',
    authStartRegister: '[auth] Start Register',
    authStartTokenRenew: '[auth] Start Token Renew',
    authLogout: '[auth] Logout',
    //UI
    uiSetError: '[UI] SetError',
    uiRemoveError: '[UI] RemoveError',
    uiStartLoading: '[UI] Start loading',
    uiFinishLoading: '[UI] Finish loading',
    uiOpenModal: '[UI] Open Modal',
    uiCloseModal: '[UI] Close Modal',
    //Transactions
    transactionAddNew: '[Transaction] add transaction',
    transactionEdit: '[Transaction] edit transaction',
    transactionDelete: '[Transaction] delete transaction',
    transactionStartLoading: '[Transaction] loading transactions',
    transactionFinishLoading: '[Transaction] transactions loaded'
}
