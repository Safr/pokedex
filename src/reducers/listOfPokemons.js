import { SET_FINAL_POKEMON_DATA_SUCCESS, SET_FINAL_POKEMON_DATA_FAIL } from '../actionTypes';

export default function finalPokemonsData(state = [], action) {
  switch (action.type) {
  case SET_FINAL_POKEMON_DATA_SUCCESS:
    return [
      ...state,
      action.payload,
    ];
  case SET_FINAL_POKEMON_DATA_FAIL:
    return [
      ...state,
    ];
  default:
    return state;
  }
}
