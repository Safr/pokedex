import { IS_LOADING } from '../../actionTypes';
import setLoading from '../../actions/isLoading';

describe('isLoading action', () => {
  it('should create an action to set isLoading', () => {
    const action = {
      type: IS_LOADING,
    };
    expect(setLoading()).toEqual(action);
  });
});
