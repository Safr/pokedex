import styled, { css } from 'styled-components';
import media from '../../theme/media';
import { bgColor, white } from '../../theme/variables';

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 10px;
  font-size: 36px;
  ${media.tablet`
   font-size: 30px;
  `}
  ${media.desktop`
    font-size: 26px;
  `}
`;

export const HeaderContainer = styled.header`
  margin: 0;
  margin-bottom: 16px;
  ${media.tablet`
    margin-bottom: 20px;
  `}
`;
