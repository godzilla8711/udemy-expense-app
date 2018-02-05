import React from 'react';
import { connect } from 'react-redux';

import { filterText } from '../actions/filter';

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
