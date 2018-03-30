import styled, { css } from 'styled-components';
import media from '../../theme/media';
import { bgColor, mainColor, red, white } from '../../theme/variables';

export const List = styled.ul`
  margin: 0;
  margin-bottom: 50px;
  padding: 8px;
  text-align: center;
  ${media.tablet`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  `}
  ${media.desktop`
    justify-content: flex-start;
  `}
`;

export const P = styled.p`
  margin-bottom: 0;
  font-size: 28px;
  ${media.tablet`
    margin-right: auto;
    margin-left: auto;
    font-size: 35px;
  `}
  ${media.desktop`
    font-size: 45px;
  `}

  img {
    display: block;
    width: 100px;
    height: 100px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 30px;
    ${media.tablet`
      width: 1200px;
      height: 120px;
    `}
    ${media.desktop`
      width: 140px;
      height: 140px;
    `}
  }
`;

export const ResetBtn = styled.button`
  width: 100px;
  height: 38px;
  padding: 7px;
  font-size: inherit;
  color: ${white};
  border: 1px solid transparent;
  background: none;
  background-color: ${red};
  border-radius: 5px;
  outline: none;
  transition: all .3s ease;
  cursor: pointer;
  ${media.tablet`
    margin-top: 181px;
  `}
  ${media.desktop`
    margin: 0 auto;
    margin-top: 40px;
  `}
  &:hover,
  &:active {
    border: 1px solid ${white};
    background-color: transparent;
  }
`;
