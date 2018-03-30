import styled, { css } from 'styled-components';
import media from '../../theme/media';
import { red, rose, white } from '../../theme/variables';

// @media (min-width: 20px) and (max-width: 620px) {
//   max-width: 360px;
//   margin: 0 auto;
// }

export const ListItem = styled.li`
  @media (min-width: 20px) and (max-width: 620px) {
    margin: 0 auto;
    margin-bottom: 20px;
  }

  position: relative;
  display: flex;
  justify-content: center;
  max-width: 380px;
  margin-bottom: 20px;
  background-color: ${white};
  animation: bounce .4s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);

  img {
    cursor: pointer;
    transform: translateY(0);
    transition: all .3s ease;
  }

  &:hover img,
  &:active img {
    transform: translateY(5px);
  }

  ${media.tablet`
    width: 48%;
  `}
  ${media.desktop`
    width: 32%;
    margin-right: 10px;

    &:nth-child(3n) {
      margin-right: 0;
    }
  `}

  h2 {
    padding-top: 10px;
  }
`;

export const SpanId = styled.span`
  position: absolute;
  top: 5px;
  right: 9px;
  color: ${rose};
  font-weight: bold;
`;

export const ListFooter = styled.footer`
  margin: 0;
  padding: 8px;

  button {
    font-size: inherit;
    color: #fff;
    outline: none;
    border: none;
    background: none;
  }

  div {
    display: block;
  }
`;

