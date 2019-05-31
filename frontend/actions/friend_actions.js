import * as FriendAPIUtil from '../util/friend_api_util';

export const RECEIVE_FRIEND = "RECEIVE_FRIEND";

export const receiveFriend = friend => {
    return {
        type: RECEIVE_FRIEND,
        friend,
    };
};

export const addFriend = (userId, targetId) => dispatch => {
    return FriendAPIUtil.addFriend(userId, targetId).then(
        res => dispatch(receiveFriend(res))
    );
};

export const confirmRequest = friendId => dispatch => {
    return FriendAPIUtil.confirmRequest(friendId).then(
        res => dispatch(receiveFriend(res))
    );
};