import styled, { css } from 'styled-components';
import media from '../../theme/media';
import { mainColor, red, rose, white } from '../../theme/variables';

export const DetailsHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${white};
  background-color: ${mainColor};

  h1 {
    font-size: 25px;
    ${media.tablet`
      font-size: 32px;
    `}
  }

  a {
    font-size: 20px;
    margin-left: 14px;
    color: ${red};
    ${media.tablet`
      font-size: 30px;
    `}
  }
`;

export const Logo = styled.span`
  padding: 1px;
`;

export const SpanId = styled.span`
  font-size: 10px;
`;

export const Details = styled.div`
  background-color: ${white};
`;

export const DetailsImage = styled.figure`
  margin: 0 auto;
`;
