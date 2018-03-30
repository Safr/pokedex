import { IS_LOADING, SET_INITIAL_POKEMON_DATA_SUCCESS, SET_FINAL_POKEMON_DATA_SUCCESS } from '../actionTypes';

export default function setLoading(state = false, action) {
  switch (action.type) {
  case IS_LOADING:
    return true;
  case SET_INITIAL_POKEMON_DATA_SUCCESS:
    return false;
  case SET_FINAL_POKEMON_DATA_SUCCESS:
    return false;
  default:
    return state;
  }
}
