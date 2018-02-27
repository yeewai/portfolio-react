import React from 'react';
import { Provider } from 'react-redux';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import ModalRoot from './ModalRoot';

const mockStore = configureMockStore();
Enzyme.configure({ adapter: new Adapter() });


describe("Modal Root", () => {
    const testComponent = () => (<p>Sup</p>);
    const modal_components = {
        'TEST_COMP': testComponent
    };

	it ("Renders nothing if no modal is visible", () => {
		const store = mockStore({
            modals: {
                modalType: "",
                modalProps: { }
            }
		});
		const modalWrapper = mount(<Provider store={store}><ModalRoot modal_components={modal_components} whichModalRoot="top"/></Provider>);
		expect(modalWrapper.find('ModalRoot').children().length).toBe(0);
	});

	it ("Renders nothing if not given a valid modal", () => {
		const store = mockStore({
            modals: {
                modalType: "abc",
                modalProps: { }
            }
		});
		const modalWrapper = mount(<Provider store={store}><ModalRoot modal_components={modal_components} whichModalRoot="top"/></Provider>);
		expect(modalWrapper.find('ModalRoot').children().length).toBe(0);
	});

    it ("Renders nothing if not given anything", () => {
		const store = mockStore({ });
		const modalWrapper = mount(<Provider store={store}><ModalRoot modal_components={modal_components} whichModalRoot="top"/></Provider>);
		expect(modalWrapper.find('ModalRoot').children().length).toBe(0);
	});
});

describe ("Student Bio Modal", () => {
    const testComponent = () => (<p>Sup</p>);
    const modal_components = {
        'TEST_COMP': testComponent
    };

	function setup() {
		const store = mockStore({
            modals: {
                "TEST_COMP": {
                    visible: true,
                    modalProps: {}
                }
            }
		});
		return mount(<Provider store={store}><ModalRoot modal_components={modal_components} /></Provider>);
	};

	it ("Renders student bio if state says it's visible", () => {
		const modalWrapper = setup();
		expect(modalWrapper.find(testComponent).exists()).toBe(true);
	});

    //Invalid string length :(
    xit ("should match snapshot", () => {
        const modalWrapper = setup();
        expect(modalWrapper).toMatchSnapshot();
    });

});
