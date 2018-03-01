import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AboutSkill from './AboutSkill';

Enzyme.configure({ adapter: new Adapter() });

describe("(About) Skill", () => {
    it('renders', () => {
      const wrapper = shallow(<AboutSkill title="Such a cool title" shortName="sup" skillLevel="full"/>);
      expect(wrapper).toMatchSnapshot();
    });
});
