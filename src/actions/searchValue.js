import { SET_SEARCHVALUE } from '../actionTypes';

const setSearchValue = searchValue => ({
  type: SET_SEARCHVALUE,
  payload: searchValue,
});

export default setSearchValue;
