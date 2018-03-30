import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import { getPokedexData } from '../../actions';
import Pokemon from '../Pokemon/Pokemon';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import { List, P, ResetBtn } from './PokemonList.style';
import image from './location.svg';
import { sortPokemons, splitByOffset, filterPokemonsByType } from '../../helpers';

class PokemonList extends Component {
  state = {
    filterType: null,
  };
  componentDidMount() {
    if (this.props.initialPokemonsData.length === 0) {
      this.props.getInitialPokemonsData(this.props.activePage);
    }
  }

  handleFilterPokemonsByType = typeName => {
    this.setState({ filterType: typeName });
  }

  handleReset = () => {
    this.setState({ filterType: null });
  }

  render() {
    if (this.props.fetchPokemonsFailed) {
      return 'Pokemons cannot be loaded';
    }
    if (this.props.pokemons.length === 0) {
      return <Loader />;
    }
    let filteredPokemonsByType = null;
    const filteredPokemons = this.props.pokemons.filter(pokemon => (
      pokemon.name.toLowerCase().indexOf(this.props.searchValue) > -1));
    if (this.state.filterType) {
      filteredPokemonsByType = filterPokemonsByType(filteredPokemons, this.state.filterType);
    }
    const renderPokemons = filterData => (
      filterData.map(pokemon => (
        <Pokemon
          key={uuidv4()}
          id={pokemon.id}
          avatar={pokemon.avatar}
          name={pokemon.name}
          type={pokemon.type}
          onFilterPokemonsByType={this.handleFilterPokemonsByType}
        />
      )));
    const filterResults = () => {
      if (filteredPokemons.length === 0) {
        return (
          <P>
            <img src={image} alt="location" />
            No pokemons were found
          </P>
        );
      }
      return !this.state.filterType ?
        renderPokemons(filteredPokemons)
        :
        renderPokemons(filteredPokemonsByType);
    };
    return (
      <List>
        {
          this.props.pokemons.length > 0 ? filterResults() : <Loader />
        }
        { this.state.filterType ? <ResetBtn onClick={this.handleReset}>Reset</ResetBtn> : null }
      </List>
    );
  }
}

PokemonList.propTypes = {
  activePage: PropTypes.number.isRequired,
  initialPokemonsData: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  pokemons: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    type: PropTypes.arrayOf(PropTypes.string.isRequired),
  })).isRequired,
  searchValue: PropTypes.string.isRequired,
  fetchPokemonsFailed: PropTypes.bool.isRequired,
  getInitialPokemonsData: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  initialPokemonsData: state.initialPokemonsData,
  pokemons: splitByOffset(sortPokemons(state.listOfPokemons), ownProps.activePage),
  searchValue: state.searchValue.toLowerCase(),
  fetchPokemonsFailed: state.fetchPokemonsFailed,
});

const mapDispatchToProps = dispatch => ({
  getInitialPokemonsData: activePage => dispatch(getPokedexData(activePage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
