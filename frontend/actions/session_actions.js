import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const createUser = user => dispatch => {
    debugger
    return SessionAPIUtil.createUser(user).then(res => {
        debugger
            return dispatch(receiveCurrentUser(res)
    )})
};

export const requestLogin = user => dispatch => (
    SessionAPIUtil.requestLogin(user).then(
        res => dispatch(receiveCurrentUser(res)
    ))
);

export const requestLogout = () => dispatch => (
    SessionAPIUtil.requestLogout().then(res => dispatch(logoutCurrentUser()))
);
