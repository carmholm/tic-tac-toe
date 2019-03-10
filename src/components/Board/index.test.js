import React from 'react';
import { shallow } from 'enzyme';
import Board from './';
import Square from '../Square';

describe('Board', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a board of 9 squares', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.find('.game-square').children(Square).length).toEqual(9);
  });
});
