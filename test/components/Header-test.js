import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Header from '../../src/components/Header';

describe('render', () => {
  it('renders Header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('NavLink').length).to.equal(4);
    // expect(wrapper).toMatchSnapshot();
  });
});
