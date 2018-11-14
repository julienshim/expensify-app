import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

// const date = new Date();
const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calendarFocused: false,
    error: ''
  };

  onDescriptionChange = ({ target }) => {
    const description = target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = ({ target }) => {
    const note = target.value; //Alternatively target.persist();
    this.setState(() => ({ note }));
  };

  onAmountChange = ({ target }) => {
    const amount = target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = event => {
    event.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: 'Please provide description and amount.'
      }));
      // Set error state equal to 'Please provide description and amount.'
    } else {
      // Clear the error
      this.setState(() => ({
        error: ''
      }));
      console.log('Submitted');
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          {/* Autofocuse not used -- can cause usability issues for sighted and non-sighted users */}
          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={day => false}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button type="button">Add Expense</button>
        </form>
      </div>
    );
  }
}
