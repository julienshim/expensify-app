import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense } from '../actions/expenses';

// Export a stateless functional component
// descripton, amount, createdAt

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
  <div>
    <h3>{description}</h3>
    <p>
      {amount} - {createdAt}
    </p>
    <button
      type="button"
      onClick={() => {
        dispatch(removeExpense({ id }));
      }}
    >
      Remove
    </button>
  </div>
);

const mapStateToProps = state => ({
  expenses: state.expenses
});

ExpenseListItem.propTypes = {
  id: PropTypes.string,
  dispatch: PropTypes.func,
  description: PropTypes.string,
  amount: PropTypes.number,
  createdAt: PropTypes.number
};

export default connect(mapStateToProps)(ExpenseListItem);
