// import {isDirty} from 'redux-form';

export const getModal = (state, modalType) => state.modals[modalType];

export const getModalProps = (state, modalType) => {
    const modal = getModal(state, modalType);
    return modal && modal.modalProps;
}

export const isOpen = (state, modalType) =>  {
    const modal = getModal(state, modalType);
    return modal && modal.visible;
}
// export const dirtyFormExists = (state, modalType) => {
//     const props = getModalProps(state, modalType);
//     return props && props.formName && isDirty(props.formName)(state);
// }

// export const isConfirm = (state, modalType) => {
//     const modal = getModal(state, modalType);
//     return modal && modal.modalType === "CONFIRM_MODAL";
// }

export const getAllModals = (state) => state.modals;
