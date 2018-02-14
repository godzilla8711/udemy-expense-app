import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../../src/components/NotFound';

describe('render', () => {
  it('renders component', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
