import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

// Export a stateless functional component
// descripton, amount, createdAt

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {amount} - {createdAt}
    </p>
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
