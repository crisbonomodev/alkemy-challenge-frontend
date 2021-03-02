
import { fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";

export const transactionAddStartNew = (transaction) => {

    return async  (dispatch, getState) => {

        const {uid,name} = getState().auth;
        try {
            const resp = await fetchWithToken('transaction/',transaction,'POST');
            const body = await resp.json();

            if (body.ok)
            {
                console.log(body);
                transaction.id = body.newTransaction.id;
                transaction.user = {
                    _id: uid,
                    name
                }
                dispatch(transactionAddNew(transaction));
            }
        } catch (error) {
            console.log(error);
        }


    }
};

export const transactionAddNew = (transaction) => ({
    type: types.transactionAddNew,
    payload: transaction
});

export const transactionStartLoading = (id) => {
    return async (dispatch) => {

        try {
            const resp = await fetchWithToken('transaction/','GET');
            const data = await resp.json();

            const transactionsById = data.filter(transaction => transaction.userId === id);

            dispatch(transactionsLoaded(transactionsById));
        } catch (error) {
            console.log(error);
        }
    }
}

const transactionsLoaded = (transactions) => ({
        type: types.transactionFinishLoading,
        payload: [...transactions]
    });

export const transactionSetActive = (transaction) => ({
    type: types.transactionSetActive,
    payload: transaction

})