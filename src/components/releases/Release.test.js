import React from 'react';
import { shallow } from 'enzyme';
import Release from './Release';

describe('Release component', () => {
  it('renders App', () => {
    const wrapper = shallow(<Release />);
    expect(wrapper).toMatchSnapshot();
  });
});
