import { combineReducers } from 'redux';
import sessions from './session_errors_reducer';

const errorsReducer = combineReducers({
    sessions,
});

export default errorsReducer;