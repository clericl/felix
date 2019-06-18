import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH = "RECEIVE_SEARCH";

export const receiveSearch = results => {
    return {
        type: RECEIVE_SEARCH,
        results,
    };
};

export const search = query => dispatch => {
    return SearchAPIUtil.search(query).then(
        res => dispatch(receiveSearch(res))
    );
};