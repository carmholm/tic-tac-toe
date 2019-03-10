import React from 'react';
import { shallow } from 'enzyme';
import Board from './';
import Square from '../Square';

describe('Board', () => {
  it('renders without crashing', () => {
    const squares = Array(9).fill(null);
    const wrapper = shallow(<Board squares={squares} onClick={jest.fn()} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a board of 9 squares', () => {
    const squares = Array(9).fill(null);
    const wrapper = shallow(<Board squares={squares} onClick={jest.fn()} />);
    console.log(wrapper.debug())
    expect(wrapper.find('.game-square').children(Square).length).toEqual(9);
  });
});
