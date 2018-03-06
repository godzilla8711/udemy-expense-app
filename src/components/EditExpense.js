import React from 'react';

class EditExpense extends React.Component {
  render() {
    const query = new URLSearchParams(this.props.location.search);
    const expenseId = query.get('id');
    return (
      <div>
        Edit the details of Expense ID {expenseId}
      </div>
    );
  }
}

export default EditExpense;
