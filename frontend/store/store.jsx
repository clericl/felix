import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = (initialState = {}) => {
    return createStore(rootReducer, initialState, applyMiddleware(ReduxThunk, logger));
};

export default configureStore;