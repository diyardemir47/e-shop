import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import cartItems from './Reducers/cardItem';

const reducers=combineReducers({
cartItems:cartItems
})

const store=createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))

)

export default store;
