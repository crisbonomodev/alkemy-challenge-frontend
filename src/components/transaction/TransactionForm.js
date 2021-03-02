import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { transactionAddStartNew, transactionStartUpdate } from '../../actions/transaction';
import { useForm } from '../../hooks/useForm';
import {uiCloseModal} from '../../actions/ui';

export const TransactionForm = () => {


    const dispatch = useDispatch();

    const {activeTransaction} = useSelector(state => state.transaction)

    const {uid: userId} = useSelector(state => state.auth)

    const [formValues, handleInputChange] = useForm(activeTransaction || {
        concept: '',
        amount: '',
        type: '',
        category: '',
        date: ''
    });

    const {concept, amount, date, type, category} = formValues;

  
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(activeTransaction)
        {
            
            dispatch(transactionStartUpdate(formValues,activeTransaction.id));
        }
        else
        {
            dispatch(transactionAddStartNew({userId,...formValues}));
        }
        dispatch(uiCloseModal());
    }

    let title = 'New Transaction';
    let typeInputDisabled = false;
    
    if(activeTransaction)
    {
        title = 'Edit Transaction';
        typeInputDisabled = true;
    }

    return (
        <div className="container">
            <h3>{title}</h3>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm">
                        <label className="form-label" htmlFor="type">Tipo: </label>
                        <select className="form-control" name="type" disabled={typeInputDisabled} value={type} onChange={handleInputChange} id="">
                            <option value="ingreso">Ingreso</option>
                            <option value="egreso">Egreso</option>
                        </select>
                    </div>
                    <div className="col-sm">
                        <label className="form-label" htmlFor="category">Categoria: </label>
                        <select name="category"  className="form-control" value={category} onChange={handleInputChange}>
                            <option>Alimentacion</option>
                            <option>Impuestos</option>
                            <option>Sueldo</option>
                        </select>
                    </div>
                    <div className="col-sm">
                        <label className="form-label" htmlFor="date">Fecha: </label>
                        <input type="date" className="form-control" value={date} name="date" onChange={handleInputChange} id=""/>
                    </div>
                </div>
                <label className="form-label" htmlFor="concept">Concepto: </label>
                <input type="text" className="form-control" name="concept" value={concept} onChange={handleInputChange} id=""/>
                <label className="form-label" htmlFor="amount">Monto: </label>
                <input type="text" className="form-control" name="amount" value ={amount} onChange={handleInputChange} id=""/>
                <button type="submit" className="btn btn-primary mt-3">Save</button>
            </form>
        </div>
    )
}
