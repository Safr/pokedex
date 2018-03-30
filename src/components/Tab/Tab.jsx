import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PokemonMain from '../PokemonMain/PokemonMain';
import PokemonStats from '../PokemonStats/PokemonStats';
import TabUl from './Tab.style';

class Tab extends Component {
  state = {
    tabSelected: 1,
  };
  selectTab = tabNum => {
    this.setState({ tabSelected: tabNum });
  }
  render() {
    return (
      <div>
        <TabUl>
          <li className={this.state.tabSelected === 1 ? 'active' : ''}><button onClick={() => this.selectTab(1)}>Main</button></li>
          <li className={this.state.tabSelected === 2 ? 'active' : ''}><button onClick={() => this.selectTab(2)}>Stats</button></li>
        </TabUl>
        <div>
          { this.state.tabSelected === 1 &&
          <PokemonMain currentPokemon={this.props.currentPokemon} />
          }

          { this.state.tabSelected === 2 &&
          <PokemonStats currentPokemon={this.props.currentPokemon} />
          }
        </div>
      </div>
    );
  }
}

Tab.propTypes = {
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

export default Tab;
