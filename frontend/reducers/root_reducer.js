import { combineReducers } from 'redux';
import sessions from './sessions_reducer';
import errors from './errors_reducer';
// import entities from './entities_reducer';

const rootReducer = combineReducers({
    // entities,
    errors,
    sessions,
});

export default rootReducer;