import { fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";


export const balanceStartLoading = (id) => {
    return async (dispatch) => {

        try {
            const resp = await fetchWithToken('balance/','GET');
            const data = await resp.json();
            const balanceById = data.filter(balance => balance.userId === id);
            dispatch(balanceLoaded(balanceById));
        } catch (error) {
            console.log(error);
        }
    }
}

const balanceLoaded = (balance) => {
    return {
        type: types.balanceLoaded,
        payload: balance
    }};

export const balanceAddNewAmount = (transaction) => {
    return async (dispatch) => {
    const {userId,amount,type} = transaction;
    const resp = await fetchWithToken('balance/',{userId,amount,type},'PUT');
            const data = await resp.json();
            if (data.ok)
            {
                const resp = await fetchWithToken('balance/','GET');
                const data = await resp.json();
                dispatch(balanceFinishUpdate(data));
            }
    
    }
}


export const balanceStartUpdate = (previousBalance,oldAmount,newAmount,type) => {
   //console.log(previousBalance,oldAmount,newAmount);
    return async (dispatch) => {
        try { 
                let newBalanceAmount = 0;
                let newBalance = previousBalance.map(balanceItem => {

                    let {balance,userId,id,createdAt,updatedAt} = balanceItem;
                    
                if (oldAmount !== undefined && newAmount !== undefined)
                {
                    switch (type) {
                        case 'ingreso':
                            newBalanceAmount = balance - Number.parseFloat(oldAmount) + Number.parseFloat(newAmount);   
                            break;
                        case 'egreso':
                            newBalanceAmount = balance + Number.parseFloat(oldAmount) - Number.parseFloat(newAmount);
                            break;
                            default:
                            break;
                    }
                }

                return {
                    id,
                    userId,
                    balance : newBalanceAmount,
                    createdAt,
                    updatedAt,
                };

            })

            const resp = await fetchWithToken('balance/',{newBalance},'POST');
            const data = await resp.json();
            if(data.ok)
            {
                dispatch(balanceFinishUpdate(newBalance));
            }

        } catch (error) {
            console.log(error);
        }
    }
}

export const balanceDeleteMovement = (transaction) => {
    return async (dispatch) => {
        try {
            
            const {userId,amount,type} = transaction; 
            const resp = await fetchWithToken('balance/',{userId,amount,type},'DELETE');
            const data = await resp.json();
            if (data.ok)
            {
                const resp = await fetchWithToken('balance/','GET');
                const data = await resp.json();
                dispatch(balanceFinishUpdate(data));
            }

        } catch (error) {
            console.log(error);
        }
    }
}

export const balanceFinishUpdate = (balance) => {
    return {
    type: types.balanceFinishUpdate,
        payload: balance
}
}
