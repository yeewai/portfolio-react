import React from 'react';
import { Provider } from 'react-redux';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import sinon from 'sinon';
import OpenModalButton, {mapDispatchToProps} from './OpenModalButton';
import { modalActions } from 'services/modal';

const mockStore = configureMockStore();
Enzyme.configure({ adapter: new Adapter() });

describe("Open Modal Button", () => {
    it('should call show modal action', () => {
        const dispatchSpy = sinon.spy();
        const {openModal} = mapDispatchToProps(dispatchSpy);
        openModal(undefined, undefined, {preventDefault: () => {}});
        const expectedAction = modalActions.showModal();
        const spyLastCall = dispatchSpy.args[0][0];

        expect(spyLastCall.type).toBe(expectedAction.type);
        expect(spyLastCall.type).toBeDefined();
    });

    it ("calls openModal on click", () => {
        const store = mockStore({});
        store.dispatch = sinon.spy();
        const wrapper = mount(<OpenModalButton store={store} modalType="" />);
        wrapper.simulate("click");

        expect(store.dispatch.called).toBe(true);
    })
});
