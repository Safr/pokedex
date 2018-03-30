import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import preload from '../../../data.json';
import Search from '../Search';
import ShowCard from '../ShowCard';

describe('Search component', () => {
  // const component = renderer.create(<Search />);
  const component = shallow(<Search shows={preload.shows} />);
  // const tree = component.toJSON();
  it('renders correctly', () => {
    // expect(tree).toMatchSnapshot();
    expect(component).toMatchSnapshot();
  });
  it('should render correct amount of shows', () => {
    expect(component.find(ShowCard).length).toEqual(preload.shows.length);
  });
  it('should render correct amount of shows based on search term', () => {
    const searchWord = 'black';
    component.find('input').simulate('change', { target: { value: searchWord } });
    const showCount = preload.shows
      .filter(show => `${show.title}${show.description}`.toLowerCase().indexOf(searchWord.toLowerCase()) >= 0).length;
    expect(component.find(ShowCard).length).toEqual(showCount);
  });
});

