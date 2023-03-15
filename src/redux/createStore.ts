import { combineReducers, createStore } from 'redux';

import { HomePageReducer } from './HomePageReducer';
import { SignStatusReducer } from './SignStatusReducer';
import { CoffeeMenuReducer } from './CoffeeMenuReducer';
import { FooterReducer } from './FooterReducer';
import { CoffeeMenuItemsReducer } from './CoffeeMenuItemsReducer';

let reducers = combineReducers({
  homePage: HomePageReducer,
  signStatus: SignStatusReducer,
  coffeeMenu : CoffeeMenuReducer,
  footer: FooterReducer,
  coffeeMenuItems: CoffeeMenuItemsReducer,
})

const store = createStore(reducers);

export default store;
