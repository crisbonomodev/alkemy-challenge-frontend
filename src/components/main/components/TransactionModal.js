import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../../actions/ui';
import { TransactionForm } from '../../transaction/TransactionForm';

export const TransactionModal = () => {


    const {openModal} = useSelector(state => state.ui);

    const dispatch = useDispatch();

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };

      Modal.setAppElement('#root');

      const closeModal = () => {
          dispatch(uiCloseModal());
      }

    return (
        <div>
           <Modal
            isOpen={openModal}
            //onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
            <TransactionForm />
            </Modal>

        </div>
    )
}
