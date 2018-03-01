import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Nav } from './Nav';

Enzyme.configure({ adapter: new Adapter() });

describe("Nav", () => {
    it('renders', () => {
      const wrapper = shallow(<Nav match={{ url: "/art/awofnbl" }} />);
      expect(wrapper).toMatchSnapshot();
    });

    it ("selects the right item", () => {
        const artWrapper = shallow(<Nav match={{ url: "/art/awofnbl" }} />);
        expect(artWrapper.find("#art.selected")).toHaveLength(1);
        expect(artWrapper.find("#code.selected")).toHaveLength(0);
        expect(artWrapper.find("#about.selected")).toHaveLength(0);

        const codeWrapper = shallow(<Nav match={{ url: "/code/awofnbl" }} />);
        expect(codeWrapper.find("#art.selected")).toHaveLength(0);
        expect(codeWrapper.find("#code.selected")).toHaveLength(1);
        expect(codeWrapper.find("#about.selected")).toHaveLength(0);

        const aboutWrapper = shallow(<Nav match={{ url: "/about/awofnbl" }} />);
        expect(aboutWrapper.find("#art.selected")).toHaveLength(0);
        expect(aboutWrapper.find("#code.selected")).toHaveLength(0);
        expect(aboutWrapper.find("#about.selected")).toHaveLength(1);
    })
})
