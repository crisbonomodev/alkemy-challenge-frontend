import { types } from '../types/types';

const initialState = {
    transactions: [],
    activeTransaction: null
}

export const transactionReducer = (state=initialState,action) => {
    switch (action.type) {
        case types.transactionAddNew:
            return {
                ...state,
                transactions: [
                    ...state.transactions,
                    action.payload
                ]
            }
        case types.transactionFinishLoading:
            return {
                ...state,
                transactions: [...action.payload]
            }
        case types.transactionSetActive:
            return {
                ...state,
                activeTransaction: action.payload
            }
        default:
            return state;
    }
}
