import { combineReducers } from 'redux';
import entities from './entities_reducer';

const rootReducer = combineReducers({
    entities,
    // errors,
    // ui,
});

export default rootReducer;