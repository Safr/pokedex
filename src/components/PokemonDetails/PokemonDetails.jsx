import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRequestedPokemon } from '../../actions';
import Container from '../../theme/grid';
import { DetailsHeader, Logo, SpanId } from './PokemonDetails.style';
import Loader from '../Loader/Loader';
import Tab from '../Tab/Tab';
import { findCurrPoke } from '../../helpers';

class PokemonDetails extends Component {
  componentDidMount() {
    console.log(this.props.currentPokemon);
    if (this.props.currentPokemon === null) {
      this.props.onRequestPokemon(this.props.match.params.id);
    }
  }

  render() {
    // const { currentPokemon, requestedPokemon } = this.props;
    const { avatar, name, id } = this.props.currentPokemon || this.props.requestedPokemon;
    return (
      !this.props.currentPokemon &&
      Object.keys(this.props.requestedPokemon).length === 0 ?
        <Loader />
        :
        <Container>
          <DetailsHeader>
            <Link to="/"><Logo>Pokedex</Logo></Link>
            <h1>{name}</h1>
            <SpanId><img src={avatar} alt="avatar" /></SpanId>
          </DetailsHeader>
          <Tab
            currentPokemon={this.props.currentPokemon ?
              this.props.currentPokemon : this.props.requestedPokemon}
          />
        </Container>
    );
  }
}

PokemonDetails.defaultProps = {
  currentPokemon: null,
};

PokemonDetails.propTypes = {
  currentPokemon: PropTypes.shape({
    attack: PropTypes.number,
    avatar: PropTypes.string,
    defense: PropTypes.number,
    height: PropTypes.number,
    hp: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
    specialAttack: PropTypes.number,
    specialDefense: PropTypes.number,
    speed: PropTypes.number,
    type: PropTypes.arrayOf(PropTypes.string),
    weight: PropTypes.number,
  }),
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,

  }).isRequired,
  requestedPokemon: PropTypes.shape({}).isRequired,
  onRequestPokemon: PropTypes.func.isRequired,
};

const matchStateToProps = ({ listOfPokemons, requestedPokemon }, ownProps) => ({
  currentPokemon: findCurrPoke(listOfPokemons, ownProps.match.params.id),
  requestedPokemon,
});

const mapDispatchToProps = dispatch => ({
  onRequestPokemon: id => dispatch(getRequestedPokemon(id)),
});

export default connect(matchStateToProps, mapDispatchToProps)(PokemonDetails);
