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

  it('handles square click', () => {
    const wrapperInstance = shallow(<Board />).instance();
    wrapperInstance.handleClick(0);
    expect(wrapperInstance.state.squares[0]).toBe('X');
  });
});

describe('calculateWinner', () => {
  it('should return null if there is no winner', () => {
    const noWinner =  ["X", "X", "O", "O", "O", "X", "X", "O", "X"];
    const wrapperInstance = shallow(<Board />).instance();
    expect(wrapperInstance.calculateWinner(noWinner)).toBe(null);
  })
  it('should return winner if there is a winner', () => {
    const winner = ["X", "X", "O", "X", "O", "X", "O", "O", "X"]
    const wrapperInstance = shallow(<Board />).instance();
    expect(wrapperInstance.calculateWinner(winner)).toEqual('O')
  })
})
