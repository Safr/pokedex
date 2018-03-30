import styled, { css } from 'styled-components';
import media from '../../theme/media';

const PaginationList = styled.ul`
  position: absolute;
  left: 47%;
  bottom: 20px;
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: auto;

  li {
    margin-right: 5px;
  }

  a {
    font-size: inherit;

    &:hover,
    &:active {
      text-decoration: underline;
    }
  }
`;

export default PaginationList;
