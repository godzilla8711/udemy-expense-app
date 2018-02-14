import React from 'react';
import { shallow } from 'enzyme';

import ExpenseDashboard from '../../src/components/ExpenseDashboard';

describe('render', () => {
  it('renders component', () => {
    const wrapper = shallow(<ExpenseDashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
