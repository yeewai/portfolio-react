import projectsReducer, { defaultState } from './reducer';

describe("Reducers/projects", () => {
    it ("renders the initial state", () => {
        expect(projectsReducer(undefined, {})).toEqual(defaultState);
    });
});
