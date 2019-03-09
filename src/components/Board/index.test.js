import React from 'react';
import { shallow, mount } from 'enzyme';
import Board from './';

describe('Board', () => {
  it('renders without crashing', () => {
    shallow(<Board />);
  });
});
