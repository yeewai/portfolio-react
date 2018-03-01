import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import { Projects, mapStateToProps } from './Projects';
import { projectsSelectors } from 'services/projects';

Enzyme.configure({ adapter: new Adapter() });

describe("Projects", () => {
    const project1 = {
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

    const project2 = {
        images: [
            { url: "a", alt: "b" },
            { url: "c", alt: "d" }
        ],
        title: "Eyyyyyy2",
        date: "Some date2",
        tools: "Sum tools2",
        description: "<p>sup sup sup</p>"
    }

    it('renders', () => {
        const projects = [project1, project2];

        const wrapper = shallow(<Projects projects={projects} projectsType="/art"/>);
        expect(wrapper).toMatchSnapshot();
    });

    it ('mapStateToProps', () => {
        const sandbox = sinon.sandbox.create();
        sandbox.stub(projectsSelectors, 'getArt').returns("project1");
        sandbox.stub(projectsSelectors, 'getCode').returns("project2");

        expect(mapStateToProps({}, {match: {params: {projectsType: "art"}}}).projects).toEqual("project1");
        expect(mapStateToProps({}, {match: {params: {projectsType: "code"}}}).projects).toEqual("project2");

        sandbox.restore();
    })

})
