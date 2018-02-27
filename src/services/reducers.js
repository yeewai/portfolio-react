import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import projectsReducer from './projects';

const rootReducer = combineReducers({
    router: routerReducer,
    projects: projectsReducer
});

export default rootReducer;
