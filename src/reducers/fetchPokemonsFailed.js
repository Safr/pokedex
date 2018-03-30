import { SET_INITIAL_POKEMON_DATA_FAIL } from '../actionTypes';

export default function setFetchedPokemonsResult(state = false, action) {
  switch (action.type) {
  case SET_INITIAL_POKEMON_DATA_FAIL:
    return true;
  default:
    return state;
  }
}
