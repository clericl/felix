// sources are sources of content for subscribers

import { combineReducers } from 'redux';
import pages from './pages_reducer';
import groups from './groups_reducer';
import events from './events_reducer';

const sourcesReducer = combineReducers({
    pages,
    groups,
    events,
});

export default sourcesReducer;