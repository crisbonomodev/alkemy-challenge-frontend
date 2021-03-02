
import { fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";

export const transactionAddStartNew = (transaction) => {

    return async  (dispatch) => {

        try {
            const resp = await fetchWithToken('transaction/',transaction,'POST');
            const body = await resp.json();

            if (body.ok)
            {
                console.log(body);
                transaction.id = body.newTransaction.id;
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

export const transactionStartUpdate = (transaction,id) => {
    return async (dispatch) => {
        transaction.id = id
        const resp = await fetchWithToken('transaction/',transaction,'PUT');
        const body = await resp.json();

        if(body.ok)
        {
            dispatch(transactionUpdate(transaction))
        }
    }
}

export const transactionUpdate = (transaction) => ({
    type: types.transactionUpdate,
    payload: transaction
})