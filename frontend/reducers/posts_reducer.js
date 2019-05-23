import { combineReducers } from 'redux';
import texts from './texts_reducer';
import photos from './photos_reducer';
import videos from './videos_reducer';
import shares from './shares_reducer';

const postsReducer = combineReducers({
    texts,
    photos,
    videos,
    shares,
});

export default postsReducer;