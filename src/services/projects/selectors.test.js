import * as projectsSelectors from './selectors';

describe("Selectors/projects", () => {
    const project1 = {
        slug: "a",
        date: 1
    };
    const project2 = {
        slug: "b",
        date: 2
    };
    const project3 = {
        slug: "c",
        date: 3
    };
    const project4 = {
        slug: "d",
        date: 4
    };

    it ("gets art projects", () => {
        const selected = projectsSelectors.getArt({
            projects: {
                art: [project1, project2],
                code: [project3, project4]
            }
        } );

        expect(selected[0]).toMatchObject(project2);
        expect(selected[1]).toMatchObject(project1);
    });

    it ("gets code projects", () => {
        const selected = projectsSelectors.getCode({
            projects: {
                art: [project1, project2],
                code: [project3, project4]
            }
        } );

        expect(selected[0]).toMatchObject(project4);
        expect(selected[1]).toMatchObject(project3);
    });

    it ("gets a project by its name", () => {
        const selected = projectsSelectors.getByName({
            projects: {
                art: [project1, project2],
                code: [project3, project4]
            }
        }, { projectType: "art", projectTitle: "b"} );

        expect(selected).toMatchObject(project2);
    });

    it ("does not get project if invalid type", () => {
        const selected = projectsSelectors.getByName({
            projects: {
                art: [project1, project2],
                code: [project3, project4]
            }
        }, { projectType: "WOOoOOOoOo", projectTitle: "b"} );

        expect(selected).toBeNull();
    })
})
