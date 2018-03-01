import React from 'react';
import Enzyme, { mount, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import sinon from 'sinon';
import ReactModal from 'react-modal';
import { findDOMNode } from 'react-dom';
import Modal, {mapDispatchToProps} from './';
import { modalActions } from 'services/modal';

const mockStore = configureMockStore();
Enzyme.configure({ adapter: new Adapter() });

describe("Generic Modal", () => {
    it('should close', () => {
        const dispatchSpy = sinon.spy();
        const {closeModal} = mapDispatchToProps(dispatchSpy);
        closeModal();
        const expectedAction = modalActions.hideModal();
        const spyLastCall = dispatchSpy.args[0][0];

        expect(spyLastCall.type).toBe(expectedAction.type);
        expect(spyLastCall.type).toBeDefined();
    });

    const renderModalAndClickClose = (store, modalType) => {
        store.dispatch = sinon.spy();
        const wrapper = mount( <Modal modalType={modalType} store={store} contentLabel="b" />);

        // react-modal doesn't attaches the modal to the root of the document so we can't find it with enzyme
        const portalWrapper = wrapper.find('ModalPortal');
        portalWrapper.find('.close').simulate('click');
    }

    it('renders children when modal is open and closes if "x" is clicked', () => {
        const store = mockStore({
            modals: {
                "a": {
                    visible: true,
                    modalProps: {}
                }
            }
        });
        renderModalAndClickClose(store, "a");

        expect(store.dispatch.called).toBe(true);
    });
});
