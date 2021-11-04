   
///redux
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import combinedReducers from './reducers';

//adding extension fo seeing states in webpage and combining it with thunk middleware
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

//creating store from all reducers
const store = createStore(combinedReducers, composedEnhancer);

export default store
  