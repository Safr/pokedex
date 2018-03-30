import React from 'react';
import Loader from '../../components/Loader/Loader';

describe('Header component', () => {
  const wrapper = shallow(<Loader />);
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

