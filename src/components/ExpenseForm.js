import React from 'react';
import moment from 'moment';
import _ from 'lodash';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.onChangeNote = this.onChangeNote.bind(this);
    this.onChangeCreatedOn = this.onChangeCreatedOn.bind(this);
    this.onFocusCreatedOn = this.onFocusCreatedOn.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);

    // Set the default state.
    const description = _.get(props, 'expense.description') || '';
    const amount = _.get(props, 'expense.amount') ? (props.expense.amount / 100).toString() : '';
    const createdOn = _.get(props, 'expense.createdOn') ? moment(props.expense.createdOn).utc() : moment.utc();
    const note = _.get(props, 'expense.note') || '';
    this.state = {
      description,
      amount,
      createdOn,
      note,
      calendarFocus: false,
      errorMessage: ''
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

    // Establish the valid mask for currency.  This is different than the validation performed on submit.
    const regexCurrency = /^\d{0,}(?:\.\d{0,2})?$/;
    if (amount.match(regexCurrency)) {
      this.setState(() => ({ amount }));
    }
  }

  onChangeNote(e) {
    const note = e.target.value;
    this.setState(() => ({
      note
    }));
  }

  onChangeCreatedOn(createdOn) {
    if (createdOn) {
      this.setState(() => ({ createdOn }));
    }
  }

  onFocusCreatedOn({ focused }) {
    this.setState(() => ({ calendarFocus: focused }));
  }

  onSubmitHandler(e) {
    // Prevent a server-side post.
    e.preventDefault();

    // Perform validation.
    if (!this.state.description) {
      this.setState(() => ({ errorMessage: 'Please enter a description' }));
    } else if (!this.state.amount) {
      this.setState(() => ({ errorMessage: 'Please enter an amount' }));
    } else {
      this.setState(() => ({ errorMessage: '' }));

      // Call the submit functon provided the the container component. Note that this will most
      // likely perform navigation to another page.
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount) * 100,
        note: this.state.note,
        createdOn: this.state.createdOn.valueOf()
      });
    }
  }

  render() {
    return (
      <div>
        <h2>Expense Form -- expense ID ${this.state.expenseId}</h2>
        {this.state.errorMessage && <p>Error: {this.state.errorMessage}</p>}
        <form onSubmit={this.onSubmitHandler}>
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
          <SingleDatePicker
            placeholder="Created On"
            date={this.state.createdOn}
            onDateChange={this.onChangeCreatedOn}
            focused={this.state.calendarFocus}
            onFocusChange={this.onFocusCreatedOn}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Note"
            value={this.state.note}
            onChange={this.onChangeNote}
          />
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
