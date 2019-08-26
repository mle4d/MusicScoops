import React from 'react';
import { shallow } from 'enzyme';
import Song from './Song';

describe('Song component', () => {
  it('renders Song', () => {
    const wrapper = shallow(<Song />);
    expect(wrapper).toMatchSnapshot();
  });
});
