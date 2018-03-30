import React, { Component } from 'react';
import PropTypes from 'prop-types';

const PokemonStats = ({ currentPokemon }) => (
  <table>
    <tbody>
      <tr>
        <td>HP</td>
        <td>{currentPokemon.hp}</td>
      </tr>
      <tr>
        <td>Attack</td>
        <td>{currentPokemon.attack}</td>
      </tr>
      <tr>
        <td>Defense</td>
        <td>{currentPokemon.defense}</td>
      </tr>
      <tr>
        <td>Special Attack</td>
        <td>{currentPokemon.specialAttack}</td>
      </tr>
      <tr>
        <td>Special Defense</td>
        <td>{currentPokemon.specialDefense}</td>
      </tr>
    </tbody>
  </table>
);

PokemonStats.propTypes = {
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
  }).isRequired,
};

export default PokemonStats;
