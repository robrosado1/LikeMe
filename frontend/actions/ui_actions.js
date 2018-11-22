import * as UserApiUtil from '../util/user_api_util';

export const GET_SEARCH = 'GET_SEARCH';

export const submitSearch = (term) => dispatch => {
  UserApiUtil.fetchUsers().then( users => {
    return dispatch(getSearch(term));
  })
};

const getSearch = (term) => {
  debugger
  return ({
    type:  GET_SEARCH,
    search: term
  })
}
