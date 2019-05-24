import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT = "LOGOUT";

export const receiveCurrentUser = id => ({
    type: RECEIVE_CURRENT_USER,
    id
});

export const logout = () => ({
    type: LOGOUT,
});


export const requestLogin = id => dispatch => (
    SessionAPIUtil.requestLogin(id).then(res => dispatch(receiveCurrentUser(id)))
);

export const requestLogout = () => dispatch => (
    SessionAPIUtil.requestLogout().then(res => dispatch(logout()))
);
