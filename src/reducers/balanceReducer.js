import { types } from '../types/types';

const initialState = {
    balance: 0
}

export const balanceReducer = (state = initialState,action) => {
   switch (action.type) {
       case types.balanceLoaded:
           return {
               ...state,
               balance: action.payload
           }
       case types.balanceUpdateAmount:
           return{
               ...state,
               balance: action.payload
           }
       default:
          return state;
   }
}
