import { SET_INITIAL_POKEMON_DATA_SUCCESS, SET_INITIAL_POKEMON_DATA_FAIL } from '../actionTypes';

export default function initialPokemonsData(state = [], action) {
  switch (action.type) {
  case SET_INITIAL_POKEMON_DATA_SUCCESS:
    return [
      ...state,
      ...action.payload,
    ];
  case SET_INITIAL_POKEMON_DATA_FAIL:
    return [
      ...state,
    ];
  default:
    return state;
  }
}
