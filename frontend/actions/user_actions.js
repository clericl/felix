import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";


export const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    };
};

export const receiveUserErrors = errors => {
    return {
        type: RECEIVE_USER_ERRORS,
        errors,
    };
};

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS,
    };
};

export const fetchUser = user => dispatch => {
    return UserAPIUtil.fetchUser(user).then(
        res => dispatch(receiveUser(res)),
        err => dispatch(receiveUserErrors(err.responseJSON))
    );
};