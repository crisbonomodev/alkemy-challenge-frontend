import { types } from '../types/types';

const initialState = {
    transactions: []
}

export const transactionReducer = (state=initialState,action) => {
    switch (action.type) {
        case types.transactionAddNew:
            return {
                ...state
            }
        case types.transactionFinishLoading:
            return {
                ...state,
                transactions: [...action.payload]
            }
        default:
            return state;
    }
}
