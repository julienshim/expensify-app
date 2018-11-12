import React from 'react';

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: ''
  };

  onDescriptionChange = ({ target }) => {
    const description = target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = ({ target }) => {
    const note = target.value;
    this.setState(() => ({ note }));
  };

  render() {
    return (
      <div>
        <form>
          {/* Autofocuse not used -- can cause usability issues for sighted and non-sighted users */}
          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input type="number" placeholder="Amount" />
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
