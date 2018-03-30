import React, { Component } from 'react';
import { setSearchTerm } from '../../actions';
import Input from '../Input/Input';
import { Title, HeaderContainer } from './Header.style';

const Header = props => (
  <HeaderContainer>
    <Title>Pokedex</Title>
    <Input />
  </HeaderContainer>
);


export default Header;

