import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';


import cartItems from './Reducers/cardItem';

const reducers = combineReducers({
  cartItems: cartItems
});

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
  );

export default store;
