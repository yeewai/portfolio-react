import React from 'react';
import { Provider } from 'react-redux';
import Enzyme, { mount, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findDOMNode } from 'react-dom';
import ReactModal from 'react-modal';
import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';
import ConfirmModal from './ConfirmModal';
import { modalActions } from 'services/modal';

const mockStore = configureMockStore([]);
Enzyme.configure({ adapter: new Adapter() });

describe("Confirm Modals", () => {
    const successSpy = sinon.spy();
    const hideModalSpy =  sinon.spy(modalActions, "hideModal");
    const store = mockStore({
        program: {item: {app_copy: {}}},
        modals: {
            "CONFIRM_MODAL": {
                visible: true,
                modalProps: {
                    message: "Sup",
                    onSuccess: successSpy
                }
            }
        }
    });
    const wrapper = mount(<Provider store={store}><ConfirmModal modalType={"CONFIRM_MODAL"}/></Provider>);
    const portalWrapper = wrapper.find('ModalPortal');

    it ("should just close the modal if hitting cancel", () => {
        portalWrapper.find('.cancel-btn').simulate('click');

        expect(hideModalSpy.called).toBe(true);
    });

    it ("should perform the onsuccess function if hitting confirm", () => {
        portalWrapper.find('.confirm-btn').simulate('click');
        expect(successSpy.called).toBe(true);
    });
});
