import * as types from '../constants/actionTypes/details';

const initialState = {
  card: null,
  user: null
};

export default function detailsReducer(state = initialState, action) {
  let data;
  switch (action.type) {
    case types.SET_DETAILS_SUCCESS:
      data = action.res;
      return Object.assign({}, state, {
        card: data
      });
    case types.LIKE_SUCCESS:
      data = action.res;
      return Object.assign({}, state, {
        status: data
      });
    case types.SET_USER_DETAILS_SUCCESS:
      data = action.res;
      return Object.assign({}, state, {
        user: data
      });
    default:
      return state;
  }
}
