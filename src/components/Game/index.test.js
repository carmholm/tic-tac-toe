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
    expect(wrapper.find(Board).length).toEqual(1);
  });
});

describe('calculateWinner', () => {
  it('should return null if there is no winner', () => {
    const noWinner =  ["X", "X", "O", "O", "O", "X", "X", "O", "X"];
    const wrapperInstance = shallow(<Game />).instance();
    expect(wrapperInstance.calculateWinner(noWinner)).toBe(null);
  })
  it('should return winner if there is a winner', () => {
    const winner = ["X", "X", "O", "X", "O", "X", "O", "O", "X"]
    const wrapperInstance = shallow(<Game />).instance();
    expect(wrapperInstance.calculateWinner(winner)).toEqual('O')
  })
})
