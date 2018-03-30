import { SET_SEARCHVALUE } from '../../actionTypes';
import setSearchValue from '../../reducers/searchValue';

describe('searchValue reducer', () => {
  it('should set default state', () => {
    const state = setSearchValue(undefined, { type: '@@INIT' });
    expect(state).toEqual('');
  });
  it('should set searchValue', () => {
    const action = {
      type: SET_SEARCHVALUE,
      payload: 'picachu',
    };
    const state = setSearchValue('', action);
    expect(state).toEqual(action.payload);
  });
});
