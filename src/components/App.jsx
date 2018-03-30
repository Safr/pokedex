import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPokedexData } from '../actions';
import Header from './Header/Header';
import PokemonList from './PokemonList/PokemonList';
import Pagination from './Pagination/Pagination';
import Container from '../theme/grid';

class App extends Component {
  state = {
    activePage: 1,
  };
  handlePageSelect = (evt, activePage) => {
    evt.preventDefault();
    this.setState({ activePage });
    if (activePage === 1 && this.props.pokemons.length === 0) {
      this.props.onGetInitialPokemonsData(activePage);
    } else if (activePage === 2 && this.props.pokemons.length === 10) {
      this.props.onGetInitialPokemonsData(activePage);
    } else if (activePage === 3 && (this.props.pokemons.length === 10 ||
      this.props.pokemons.length === 20)) {
      this.props.onGetInitialPokemonsData(activePage);
    }
  }
  render() {
    return (
      <Container>
        <Header />
        <PokemonList activePage={this.state.activePage} />
        <Pagination onPageSelect={this.handlePageSelect} />
      </Container>
    );
  }
}

App.propTypes = {
  onGetInitialPokemonsData: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  initialPokemonsData: state.initialPokemonsData,
  pokemons: state.listOfPokemons,
});

const mapDispatchToProps = dispatch => ({
  onGetInitialPokemonsData: activePage => dispatch(getPokedexData(activePage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
