import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseList } from '../../src/components/ExpenseList';
import expenseItems from '../mock-data/expense-data';

describe('render', () => {
  it('renders component with items', () => {
    const wrapper = shallow(<ExpenseList expenses={expenseItems} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders component with empty items', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
