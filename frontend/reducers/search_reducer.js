import { RECEIVE_SEARCH } from '../actions/search_actions';

const searchReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_SEARCH:
            if (Object.keys(action.results).length > 0) {
                return action.results;
            } else {
                return state;
            };
        default:
            return state;
    }
};

export default searchReducer;