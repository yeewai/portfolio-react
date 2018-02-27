import { createStore } from 'redux';
import rootReducer from 'services/reducers';
// import createHistory from 'history/createHashHistory';
//
// export const history = createHistory();
// const initialState = undefined;
const store = createStore(rootReducer);

export default store;
