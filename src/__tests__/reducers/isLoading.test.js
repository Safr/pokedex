import { IS_LOADING } from '../../actionTypes';
import setLoading from '../../reducers/isLoading';

describe('setLoading reducer', () => {
  it('should set default state', () => {
    const state = setLoading(undefined, { type: '@@INIT' });
    expect(state).toEqual(false);
  });
  it('should set isLoading', () => {
    const action = {
      type: IS_LOADING,
    };
    const state = setLoading(false, action);
    expect(state).toEqual(true);
  });
});
