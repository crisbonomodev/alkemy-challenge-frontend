import React from 'react'
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';

export const AddNewFab = () => {

    const dispatch = useDispatch();
    
    const handleClickNew = () => {
        dispatch(uiOpenModal());
    }

    return (
        <div>
            <button className="btn btn-circle fab" onClick={handleClickNew}>
                <i className="fas fa-plus">+</i>
            </button>
        </div>
    )
}
