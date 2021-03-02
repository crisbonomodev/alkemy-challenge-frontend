import React from 'react'
import { useDispatch } from 'react-redux';
import { transactionSetActive, transactionStartDelete } from '../../../actions/transaction';
import { uiOpenModal } from '../../../actions/ui';
import Swal from 'sweetalert2';

export const TransactionEntry = (transaction) => {
    const {type, category,date,concept,amount,id} = transaction;

    const dispatch = useDispatch();
    
    const handleEdit = () => {
        dispatch(transactionSetActive(transaction));
        dispatch(uiOpenModal());
    }

    const handleDelete =() => {
        Swal.fire({
            title: 'Do you want to delete the transaction?',
            showCancelButton: true,
            confirmButtonText: `Delete`,
            denyButtonText: `Cancel`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                dispatch(transactionStartDelete(transaction))
            }
          })
    }

    return (
        <div className="row row-style ">
            <div className="col">
            <span>{type}</span>
            </div>
            <div className="col">
            <span>{category}</span>
            </div>
            <div className="col">
            <span>{date}</span>
            </div>
            <div className="col">
            <span>{concept}</span>
            </div>
            <div className="col">
            <span>{amount}</span>
            </div>
            <div className="col">
            <button type="button" className="btn btn-primary" onClick={handleEdit}>Edit</button>
            </div>
            <div className="col">
            <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}
