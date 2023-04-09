import { legacy_createStore as createStore } from 'redux';
import { combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    // reducer
});

const intialState = {};

const middleware = [thunk];

const store =  createStore(reducer, intialState, composeWithDevTools(applyMiddleware(...middleware)) );

export default store;