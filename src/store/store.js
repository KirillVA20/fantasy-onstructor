import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers/index.js';
import thunk from 'redux-thunk';

var store = createStore(allReducers, applyMiddleware(thunk));

// store.subscribe(() => console.log(store.getState()));

export default store;