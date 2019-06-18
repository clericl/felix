import * as FriendAPIUtil from '../util/friend_api_util';

import { receiveUser, receiveUsers } from './user_actions';

export const addFriend = (userId, targetId) => dispatch => {
    return FriendAPIUtil.addFriend(userId, targetId).then(
        res => {
            return dispatch(receiveUser(res));
        }
    );
};

export const deleteFriend = (userId, targetId) => dispatch => {
    return FriendAPIUtil.findFriendId(userId, targetId).then(
        requestId => {
            return FriendAPIUtil.deleteFriend(requestId).then(
                res => dispatch(receiveUsers(res))
            );
        }
    );
};
    
export const confirmFriend = (userId, targetId) => dispatch => {
    return FriendAPIUtil.findFriendId(userId, targetId).then(
        requestId => {
            return FriendAPIUtil.confirmFriend(requestId).then(
                res => dispatch(receiveUser(res))
            );
        } 
    );
};
