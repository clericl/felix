import { combineReducers } from 'redux';
import users from './users_reducer';
import posts from './posts_reducer';
import comments from './comments_reducer';
import photos from './photos_reducer';

const entitiesReducer = combineReducers({
    users,
    posts,
    comments,
    photos,
});

export default entitiesReducer;