import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PaginationList from './Pagination.style';

const Pagination = ({ pokemons, onPageSelect }) => {
  const isDisabled = pokemons.length < 20;
  return (
    <PaginationList>
      <li>
        <a href="/" onClick={evt => onPageSelect(evt, 1)}>1</a>
      </li>
      <li>
        <a href="/" onClick={evt => onPageSelect(evt, 2)}>2</a>
      </li>
      <li>
        <a href="/" className={isDisabled ? 'disabled' : ''} onClick={evt => onPageSelect(evt, 3)}>3</a>
      </li>
    </PaginationList>
  );
};

Pagination.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    type: PropTypes.arrayOf(PropTypes.string.isRequired),
  })).isRequired,
  onPageSelect: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  pokemons: state.listOfPokemons,
});

export default connect(mapStateToProps)(Pagination);
