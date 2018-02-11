import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.onChangeNote = this.onChangeNote.bind(this);

    // Set the default state.
    this.state = {
      description: '',
      amount: '',
      note: ''
    };
  }

  componentDidMount() {
    // Set default focus.
    this.descriptionInput.focus();
  }

  onChangeDescription(e) {
    const description = e.target.value;
    this.setState(() => ({
      description
    }));
  }

  onChangeAmount(e) {
    const amount = e.target.value;
    this.setState(() => ({
      amount
    }));
  }

  onChangeNote(e) {
    const note = e.target.value;
    this.setState(() => ({
      note
    }));
  }

  render() {
    return (
      <div>
        <h2>Expense Form</h2>
        <input
          type="text"
          placeholder="Description"
          value={this.state.description}
          onChange={this.onChangeDescription}
          ref={thisElement => (this.descriptionInput = thisElement)}
        />
        <input
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onChangeAmount}
        />
        <textarea
          placeholder="Note"
          value={this.state.note}
          onChange={this.onChangeNote}
        />
      </div>
    );
  }
}

export default ExpenseForm;
