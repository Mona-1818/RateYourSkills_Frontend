import { legacy_createStore as createStore } from 'redux';
import { combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userlogin, userregistration} from './reducer/user';
import { skills } from './reducer/skills';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    USERLOGIN : userlogin,
    USERREGISTER : userregistration,
    skill : skills,
});

const userintial = localStorage.getItem('userInfo', 'Email','Token') ? JSON.parse(localStorage.getItem("userInfo")):null;
const intialState = {
    userlogin: { userInfo: userintial},
};

const middleware = [thunk];

const store =  createStore(reducer, intialState, composeWithDevTools(applyMiddleware(...middleware)) );

export default store; 





