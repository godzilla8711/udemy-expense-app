import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../src/components/Header';

describe('render', () => {
  it('renders component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('NavLink').length).toBe(4);
    expect(wrapper).toMatchSnapshot();
  });
});
