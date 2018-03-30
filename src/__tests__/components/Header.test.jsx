import React from 'react';
import Header from '../../components/Header/Header';

describe('Header component', () => {
  const wrapper = shallow(<Header />);
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
