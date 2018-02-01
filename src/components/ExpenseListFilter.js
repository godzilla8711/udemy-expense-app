import React from 'react';
import { connect } from 'react-redux';

class ExpenseListFilter extends React.Component {
  render() {
    return (
      <div>
        <input type='text' value={this.props.filters.text} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    filters: state.filters
  };
}

export default connect(mapStateToProps)(ExpenseListFilter);
