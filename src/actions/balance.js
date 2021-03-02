import { fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";


export const balanceStartLoading = (id) => {
    return async (dispatch) => {

        try {
            const resp = await fetchWithToken('balance/','GET');
            const data = await resp.json();
            const balanceById = data.filter(balance => balance.userId === id);
            balanceById.map(balance => {
                dispatch(balanceLoaded(balance));
            });
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


export const updateBalance = (amount,type) => {
    
}


