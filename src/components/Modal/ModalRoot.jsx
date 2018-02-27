import React from 'react';
import { connect } from 'react-redux';
import { modalSelectors } from 'services/modal';

/**
 * How to display Modals
 * 	* Import new modal component
 * 	* Create a key:value mapping in modal_components
 * 	* Use the OpenModalButton component to display link to open
 */

const ModalRoot = ({ modals, modal_components }) => {
    const keys = modals ? Object.keys(modals) : [];
    const modalType = keys.find( k => (k  in modal_components && modals[k].visible ));

    if (!modalType) { return null; }

    const SpecificModal = modal_components[modalType];
    return <SpecificModal modalType={modalType} {...modals[modalType].modalProps} />
};

const mapStateToProps = (state, ownProps) => ({
    modals: modalSelectors.getAllModals(state)
});
export default connect(mapStateToProps)(ModalRoot);
