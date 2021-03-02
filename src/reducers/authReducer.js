

import { types } from '../types/types';

export const authReducer = (state={},action) => {
   switch (action.type) {
       case types.authLogin:
           return {
               ...state,
               checking:false,
               ...action.payload
           }

        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }
        
        case types.authLogout:
        return {checking: false}

       default:
           return state;
   }
}
