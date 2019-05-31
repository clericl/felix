import * as FriendAPIUtil from '../util/friend_api_util';

import { receiveUser } from './user_actions';

export const addFriend = (userId, targetId) => dispatch => {
    return FriendAPIUtil.addFriend(userId, targetId).then(
        res => {
            debugger
            return dispatch(receiveUser(res));
        }
    );
};

export const confirmRequest = friendId => dispatch => {
    return FriendAPIUtil.confirmRequest(friendId).then(
        res => dispatch(receiveUser(res))
    );
};