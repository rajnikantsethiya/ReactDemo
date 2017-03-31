import * as types from '../constants/actionTypes/details';

export function setDetails(cardDetails) {
  console.log(cardDetails);
  return { type: types.SET_DETAILS_SUCCESS, res: cardDetails };
}
