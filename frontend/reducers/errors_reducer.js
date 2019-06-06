import { combineReducers } from 'redux';
import sessions from './session_errors_reducer';
import users from './user_errors_reducer';

const errorsReducer = combineReducers({
    sessions,
    users,
});

export default errorsReducer;