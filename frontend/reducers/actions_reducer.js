import { combineReducers } from 'redux';
import likes from './likes_reducer';
// import comments from './comments_reducer';
// import tags from './tags_reducer.js';

const actionsReducer = combineReducers({
    likes,
    // comments,
    // tags,
});

export default actionsReducer;