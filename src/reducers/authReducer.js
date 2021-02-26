
/*el state estara vacio cuando no estemos autenticados, y tendra el uid cuando si lo estemos
{
    uid:sdqwe1233,
    name: 'Cristian'
}
*/

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
