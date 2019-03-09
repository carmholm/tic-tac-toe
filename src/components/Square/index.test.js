import React from 'react';
import { shallow } from 'enzyme';
import Square from './';

describe('Square', () => {
  it('renders without crashing', () => {
    shallow(<Square />);
  });
  
  it('handles click event', () => {
    const cb = jest.fn();
    const square = shallow(<Square onClick={cb}/>);
    
    square.simulate('click');
    expect(cb.mock.calls.length).toEqual(1);
  });
});
