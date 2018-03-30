import styled, { css } from 'styled-components';
import media from '../../theme/media';
import { white } from '../../theme/variables';

const SearchInput = styled.input`
  width: 100%;
  background: #2b303b;
  border: none;
  color: ${white};
  padding: 15px;
  border-radius: 5px;

  &::placeholder {
    color: #ccc;
  }
`;

export default SearchInput;
