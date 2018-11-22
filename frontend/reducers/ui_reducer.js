import { GET_SEARCH } from '../actions/ui_actions';

export default ( oldState = {}, action ) => {
  debugger
  Object.freeze(oldState);
  switch (action.type) {
    case GET_SEARCH:
      return Object.assign({}, oldState, { search: action.search })
    default:
      return oldState;
  };
};
