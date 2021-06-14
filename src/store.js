import { createStore,combineReducers,applyMiddleware } from 'redux';
// import {composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers'
import thunk from 'redux-thunk';

const middleWare = [thunk];
const reducer = combineReducers({
    userInfo: rootReducer,
  });


const store = createStore(rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    // composeWithDevTools(applyMiddleware(...middleWare))
    applyMiddleware(thunk)
);

export default store
