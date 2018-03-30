import { SET_SEARCHVALUE } from '../../actionTypes';
import setSearchValue from '../../actions/searchValue';

describe('searchValue action', () => {
  it('should create an action to set set search value', () => {
    const searchValue = 'picachu';
    const action = {
      type: SET_SEARCHVALUE,
      payload: searchValue,
    };
    expect(setSearchValue(searchValue)).toEqual(action);
  });
});
