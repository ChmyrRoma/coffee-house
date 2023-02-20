import { combineReducers, createStore } from 'redux';

import { HomePageReducer } from './HomePageReducer';
import { SignStatusReducer } from './SignStatusReducer';

let reducers = combineReducers({
  homePage: HomePageReducer,
  signStatus: SignStatusReducer
})

const store = createStore(reducers);

export default store;
