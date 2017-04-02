import * as types from '../constants/actionTypes/details';
import request from 'superagent';

export function setDetails(res) {
  return { type: types.SET_DETAILS_SUCCESS, res };
}

export function setUserDetails(res) {
  return { type: types.SET_USER_DETAILS_SUCCESS, res };
}

export function likeStatus(status) {
  return { type: types.LIKE_SUCCESS, res: !status };
}

export function getDetails() {
  return (dispatch) => {
    request
    .get('https://reqres.in/api/users?page=2')
    .set('Content-Type', 'application/json')
    .query({ purpose: 'demo' })
    .end((err, res) => {
      if (err) {
        console.log(err);
      }
      const json = res.body;
      dispatch(setDetails(json));
    });
  };
}

export function userDetails() {
  return (dispatch) => {
    request
    .get('https://reqres.in/api/users/2')
    .set('Content-Type', 'application/json')
    .query({ purpose: 'demo' })
    .end((err, res) => {
      if (err) {
        console.log(err);
      }
      const json = res.body;
      dispatch(setUserDetails(json));
    });
  };
}
