import * as SessionAPIUtil from '../util/api_session_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";


export const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    };
};

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    };
};

export const receiveSessionErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors,
    };
};

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS,
    };
};

export const loginUser = user => dispatch => {
    return SessionAPIUtil.loginUser(user).then(
        res => dispatch(receiveCurrentUser(res)),
        err => dispatch(receiveSessionErrors(err.responseJSON))
    );
};

export const logoutUser = () => dispatch => {
    return SessionAPIUtil.logoutUser().then(res => (
        dispatch(logoutCurrentUser())
    ))
};

export const signupUser = user => dispatch => {
    return SessionAPIUtil.createUser(user).then(
        res => dispatch(receiveCurrentUser(res)),
        err => dispatch(receiveSessionErrors(err.responseJSON))
    );
};