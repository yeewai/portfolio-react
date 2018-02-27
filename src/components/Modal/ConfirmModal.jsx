import React from 'react';
import { connect } from 'react-redux';
import Modal from './index';
import { modalActions, modalSelectors } from 'services/modal';

const confirmModal = ({message, onSuccess, closeModal, modalType}) => (
    <Modal modalType={modalType} contentLabel="Confirm" className="modal-sm" >
        <div className="modal-body">
            {message}
          </div>
        <div className="modal-footer">
            <button className="btn btn-danger confirm-btn" onClick={ () => {
                onSuccess();
                closeModal(modalType);
            }}>
                Confirm
            </button>
              <button className="btn btn-secondary cancel-btn" onClick={() => {closeModal(modalType)}}>Cancel</button>
          </div>
    </Modal>
);


const mapStateToProps = (state, ownProps) => ({
    message: modalSelectors.getModalProps(state, ownProps.modalType).message,
    onSuccess: modalSelectors.getModalProps(state, ownProps.modalType).onSuccess
});

const mapDispatchToProps = (dispatch) => ({
    closeModal: (modalType) => {
        dispatch(modalActions.hideModal(modalType));
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(confirmModal);
