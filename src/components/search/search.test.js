import React from 'react';
import { shallow } from 'enzyme';
import search from './search';

describe('search component', () => {
  it('renders search', () => {
    const wrapper = shallow(<search />);
    expect(wrapper).toMatchSnapshot();
  });
});
