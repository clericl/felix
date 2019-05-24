import { RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions';

const _nullUser = {
    currentUserId: null,
};

const sessionReducer = (state = _nullUser, action) => {

    switch (action.type) {

        case RECEIVE_CURRENT_USER:
            const { id } = action.currentUser;
            return merge({}, { id }) // yikes

        case LOGOUT:
            return _nullUser;
            
        default:
            return state;
    }
}

export default sessionReducer;