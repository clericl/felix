import { combineReducers } from 'redux';
import session from './sessions_reducer';
import errors from './errors_reducer';
import entities from './entities_reducer';

const rootReducer = combineReducers({
    entities,
    errors,
    session,
});

export default rootReducer;