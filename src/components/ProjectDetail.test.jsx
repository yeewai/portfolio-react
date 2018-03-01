import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import { ProjectDetail, mapStateToProps } from './ProjectDetail';
import { projectsSelectors } from 'services/projects';

Enzyme.configure({ adapter: new Adapter() });

describe("Project Detail", () => {
    it('renders', () => {
        const project = {
            images: [
                { url: "a", alt: "b" },
                { url: "c", alt: "d" }
            ],
            title: "Eyyyyyy",
            subtitle: "Sub-eyyyyyyy",
            date: "Some date",
            tools: "Sum tools",
            description: "<p>sup sup sup</p>"
        }
        const wrapper = shallow(<ProjectDetail project={project} />);
        expect(wrapper).toMatchSnapshot();
    });

    it ("renders nothing if there is no project found", () => {
        const wrapper = shallow(<ProjectDetail project={null} />);
        expect(wrapper.find("#no-match")).toHaveLength(1);
    })

    it ('mapStateToProps', () => {
        const sandbox = sinon.sandbox.create();
        sandbox.stub(projectsSelectors, 'getByName').returns("project");

        expect(mapStateToProps({}, {match: {params: "a"}}).project).toEqual("project");

        sandbox.restore();
    })
})
