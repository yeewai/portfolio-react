import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import About from './About';

Enzyme.configure({ adapter: new Adapter() });

describe("About page", () => {
    it('renders', () => {
      const wrapper = shallow(<About />);
      expect(wrapper).toMatchSnapshot();
    });
});
