import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import post from './post_errors_reducer';
import comment from './comment_errors_reducer';

export default combineReducers({
  session,
  post,
  comment
});
