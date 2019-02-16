import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import rootReducer from './AppComponents/reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;