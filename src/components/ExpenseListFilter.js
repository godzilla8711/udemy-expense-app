import React from 'react';
import { connect } from 'react-redux';

import { filterText, sortByType } from '../actions/filter-action';

class ExpenseListFilter extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text} onChange={e => {
            this.props.dispatch(filterText(e.target.value));
          }}
        />
        <select value={this.props.filters.sortBy} onChange={e => {
          const selectedValue = e.target.value;
          if (selectedValue) {
            this.props.dispatch(sortByType(selectedValue));
          }
          }}
        >
          <option value="amount">Amount</option>
          <option value="date">Date</option>
        </select>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filters: state.filters
  };
}

export default connect(mapStateToProps)(ExpenseListFilter);
