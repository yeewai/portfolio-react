import React from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { modalActions, modalSelectors } from 'services/modal';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

const EverModal = ({isOpen, children, contentLabel, closeModal, className, modalType}) => {
    const closeModalType = () =>{ return closeModal(modalType)};
    const appElement = $('#root').get(0) || $('<div />').get(0); // tells screenreader which div to ignore when modal is open
    return (
        <ReactModal appElement={appElement} isOpen={isOpen} contentLabel={contentLabel} onRequestClose={closeModalType}
          className="Modal__Bootstrap modal-dialog"
          closeTimeoutMS={150}
        >
            <div role="document">
            <div className="modal-content">
                <div className="modal-close-container">
                    <button onClick={closeModalType} className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                {children}
            </div>
        </div>
        </ReactModal>
    );
};

const mapStateToProps = (state, ownProps) => ({
    isOpen: modalSelectors.isOpen(state, ownProps.modalType),
    children: ownProps.children
});

export const mapDispatchToProps = dispatch => ({
    closeModal: (modalType) => {
        dispatch(modalActions.hideModal(modalType));
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(EverModal);
