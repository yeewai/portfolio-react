import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Landing from './Landing';

Enzyme.configure({ adapter: new Adapter() });

describe("Landing Page", () => {
    it('renders', () => {
      const wrapper = shallow(<Landing />);
      expect(wrapper).toMatchSnapshot();
    });
});
