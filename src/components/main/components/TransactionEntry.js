import React from 'react'
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../../actions/ui';

export const TransactionEntry = (transaction) => {
    const {type, category,date,concept,amount,id} = transaction;

    const dispatch = useDispatch();
    
    const handleEdit = () => {
        dispatch(uiOpenModal());
    }

    return (
        <div className="row">
            <div className="col">
            <h1>{type}</h1>
            </div>
            <div className="col">
            <h1>{category}</h1>
            </div>
            <div className="col">
            <h1>{date}</h1>
            </div>
            <div className="col">
            <h1>{concept}</h1>
            </div>
            <div className="col">
            <h1>{amount}</h1>
            </div>
            <div className="col">
            <button type="button" className="btn btn-primary" onClick={handleEdit}>Edit</button>
            </div>
        </div>
    )
}
