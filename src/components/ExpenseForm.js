import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }

  onDescriptionChange = ({ target }) => {
    const description = target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = ({ target }) => {
    const note = target.value; // Alternatively target.persist();
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
    const { description, amount, createdAt, note } = this.state;
    const { onSubmit } = this.props;
    event.preventDefault();
    if (!description || !amount) {
      this.setState(() => ({
        error: 'Please provide description and amount.'
      }));
      // Set error state equal to 'Please provide description and amount.'
    } else {
      // Clear the error
      this.setState(() => ({
        error: ''
      }));
      onSubmit({
        description,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.valueOf(),
        note
      });
    }
  };

  render() {
    const {
      error,
      description,
      amount,
      createdAt,
      calendarFocused,
      note
    } = this.state;
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.onSubmit}>
          {/* Autofocuse not used -- can cause usability issues for sighted and non-sighted users */}
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={createdAt}
            onDateChange={this.onDateChange}
            focused={calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={day => false}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={note}
            onChange={this.onNoteChange}
          />
          <button type="submit">Add Expense</button>
        </form>
      </div>
    );
  }
}

ExpenseForm.propTypes = {
  expense: PropTypes.shape({
    note: PropTypes.string,
    description: PropTypes.string,
    amount: PropTypes.number,
    createdAt: PropTypes.number
  }),
  onSubmit: PropTypes.func
};
