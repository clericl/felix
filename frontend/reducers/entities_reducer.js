import { combineReducers } from 'redux';
import users from './users_reducer';
import friends from './friends_reducer';

const entitiesReducer = combineReducers({
    users,
    friends,
});

export default entitiesReducer;