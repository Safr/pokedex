import { SET_SEARCHVALUE } from '../actionTypes';

export default function setSearchValue(state = '', action) {
  switch (action.type) {
  case SET_SEARCHVALUE:
    return action.payload;
  default:
    return state;
  }
}

