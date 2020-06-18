import React from 'react';
import { shallow } from 'enzyme';
import Artist from './Artist';

describe('Artist component', () => {
  it('renders App', () => {
    const wrapper = shallow(<Artist />);
    expect(wrapper).toMatchSnapshot();
  });
});
