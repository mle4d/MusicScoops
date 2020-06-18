import React from 'react';
import { shallow } from 'enzyme';
import Releases from './Releases';

describe('Releases component', () => {
  it('renders Releases', () => {
    const wrapper = shallow(<Releases />);
    expect(wrapper).toMatchSnapshot();
  });
});
