import { SET_REQUESTED_POKEMON_DATA } from '../actionTypes';
// import initialState from './initialState';


export default function setRequestedPokemonData(state = {}, action) {
  switch (action.type) {
  case SET_REQUESTED_POKEMON_DATA:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
}
