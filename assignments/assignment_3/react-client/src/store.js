import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import combinedReducers from './reducers';

// Adding extension for seeing states in the web app and combining it with thunk middleware
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

// Creating store from all reducers
export const store = createStore(combinedReducers, composedEnhancer);