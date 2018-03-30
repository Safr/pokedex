import { SET_REQUESTED_POKEMON } from '../actionTypes';

export default function setRequestedPokemon(state = {}, action) {
  switch (action.type) {
  case SET_REQUESTED_POKEMON:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
}
