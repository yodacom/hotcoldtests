import React from 'react';
import { shallow, mount } from 'enzyme';

import GuestList from './guess-list';

describe('<GuestList />', () => {
  it('Renders without crashing', () => {
    shallow(<GuestList guesses = {[]} />);
  });

  it('Renders a list of guesses', () => {
    const values =[10, 24, 52];
    const wrapper = shallow(<GuessList guesses = {values} />);
    const items = wrapper.find('li');
    expect(items.length).toEqual(values.length);
    values.forEach((value, index => {
      expect(items.at(index).text()).toEqual(value.toString());
    });
  });
});
