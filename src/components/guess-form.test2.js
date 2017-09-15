import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
  shallow(<GuessForm />);
  });

  it('Renders the add button initially', () => {
    const wrapper = shallow(<GuessForm />);
    expect(wrapper.find('.button')).toHaveLength(1);
  });

it('Shows the guess in the guest list when entered', () => {
const callback = jest.fn();
const wrapper= mount(<GuessForm onAdd={callback} />)
});

});


