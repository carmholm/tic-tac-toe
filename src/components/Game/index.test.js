import React from 'react';
import { shallow } from 'enzyme';
import Game from './';
import Board from '../Board';

describe('Game', () => {
  it('renders without crashing', () => {
    shallow(<Game />);
  });
  
  it('renders Board component', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.contains(<Board />)).toEqual(true);
  });
});
