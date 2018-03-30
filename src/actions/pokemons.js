import axios from 'axios';
import {
  SET_INITIAL_POKEMON_DATA_SUCCESS,
  SET_INITIAL_POKEMON_DATA_FAIL,
  SET_FINAL_POKEMON_DATA_SUCCESS,
  SET_FINAL_POKEMON_DATA_FAIL,
  SET_REQUESTED_POKEMON,
} from '../actionTypes';
import setLoading from './isLoading';

const flattenPokemons = (data) => ({
  id: data.id,
  avatar: data.sprites.front_default,
  name: data.name,
  type: data.types.map(type => type.type.name),
  weight: data.weight,
  height: data.height,
  speed: data.stats[0].base_stat,
  specialDefense: data.stats[1].base_stat,
  specialAttack: data.stats[2].base_stat,
  defense: data.stats[3].base_stat,
  attack: data.stats[4].base_stat,
  hp: data.stats[5].base_stat,
});

// async function fetchAsync(url) {
//   const response = await axios.get(url);
//   const data = await response.json();
//   console.log('asyncactions', data);
//   return data.results;
// }

const fetchAsync = url => axios.get(url).then(res => res);

export const fetchPokemonsFailed = () => ({
  type: SET_INITIAL_POKEMON_DATA_FAIL,
});

export const getInitialPokemonsData = initialPokemonsData => ({
  type: SET_INITIAL_POKEMON_DATA_SUCCESS,
  payload: initialPokemonsData,
});

export const getFinalPokemonsData = finalPokemonsData => ({
  type: SET_FINAL_POKEMON_DATA_SUCCESS,
  payload: finalPokemonsData,
});

export const getIndividualPokemonData = individualPokemonData => ({
  type: SET_REQUESTED_POKEMON,
  payload: individualPokemonData,
});

export const getPokedexData = activePage => dispatch => {
  dispatch(setLoading());
  let offset;
  switch (activePage) {
  case 1:
    offset = 0;
    break;
  case 2:
    offset = 10;
    break;
  case 3:
    offset = 20;
    break;
  default:
    break;
  }
  fetchAsync(`https://pokeapi.co/api/v2/pokemon?limit=10${offset !== 0 ? `&offset=${offset}` : ''}`)
    .then(res => {
      const results = [...res.data.results];
      dispatch(getInitialPokemonsData(results));
      results.forEach(resItem => {
        fetchAsync(resItem.url)
          .then(pokemons => {
            dispatch(setLoading());
            const pokemonsData = pokemons.data;
            dispatch(getFinalPokemonsData(flattenPokemons(pokemonsData)));
          })
          .catch(err => {
            dispatch({ type: SET_FINAL_POKEMON_DATA_FAIL });
          });
      });
    })
    .catch(reason => {
      dispatch(fetchPokemonsFailed());
    });
};

export const getRequestedPokemon = id => dispatch => {
  dispatch(setLoading());
  fetchAsync(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => {
      dispatch(getIndividualPokemonData(flattenPokemons(res.data)));
    });
};
