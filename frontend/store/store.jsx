import { createStore, applyMiddleware } from 'react-redux';
import rootReducer from 

const configureStore = (initialState = {}) => {
    return createStore(rootReducer, initialState, applyMiddleware(thunk, logger));
};

export default configureStore;