import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseList, mapStateToProps } from '../../src/components/ExpenseList';
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

  it('maps state to props', () => {
    const testState = {
      expenses: expenseItems,
      filters: {}
    };

    const result = mapStateToProps(testState);
    expect(result.expenses).toEqual(expenseItems);
  });
});
