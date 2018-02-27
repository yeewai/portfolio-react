import React from 'react';
import { connect } from 'react-redux';
import { modalActions } from 'services/modal';

const OpenModalButton = ({buttonText, modalType, modalProps = {}, openModal, children, className, disabled}) => {
    const ariaLabel = modalProps.ariaLabel || `Open modal: ${modalType.replace("_", " ").toLowerCase()}`;
	return (
		<button
			aria-label={ariaLabel}
            disabled={!!disabled}
            className="open-modal-button"
			onClick={(e) => openModal(modalType, modalProps, e)}>
			{ children }
		</button>
	);
}


const mapStateToProps = (state, ownProps) => ({});
export const mapDispatchToProps = dispatch => ({
    openModal: (modalType, modalProps, e) => {
        e.preventDefault();
		dispatch(modalActions.showModal(modalType, modalProps))
        return true;
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(OpenModalButton);
