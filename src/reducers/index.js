import { combineReducers } from 'redux';
import initialPokemonsData from './initialPokemonsData';
import listOfPokemons from './listOfPokemons';
import fetchPokemonsFailed from './fetchPokemonsFailed';
import requestedPokemon from './requestedPokemon';
import isLoading from './isLoading';
import searchValue from './searchValue';

const rootReducer = combineReducers({
  initialPokemonsData, listOfPokemons, fetchPokemonsFailed, requestedPokemon, isLoading, searchValue,
});

export default rootReducer;
