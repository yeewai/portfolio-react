import data from 'projectsData.json';

export const defaultState = data;

const projectsReducer = (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default projectsReducer;
