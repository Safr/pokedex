import styled, { css } from 'styled-components';
import media from '../../theme/media';
import { bgColor, mainColor, red, white } from '../../theme/variables';

const TabUl = styled.ul`
  padding: 0;
  margin-bottom: 30px;
  ${media.tablet`
    display: flex;
    margin-bottom: 50px;
  `}
  ${media.desktop`
    margin-bottom: 90px;
  `}

  li {
    color: ${white};
    ${media.tablet`
      flex-grow: 1;
    `}
  }

  button {
    width: 100%;
    padding: 8px;
    font: inherit;
    background: none;
    outline: none;
    border: 1px solid ${white};
    cursor: pointer;
    transition: all .3s ease;

    &:hover,
    &:active {
      color: ${white};
      border-color: transparent;
      background-color: ${red};
    }
  }
`;

export default TabUl;

