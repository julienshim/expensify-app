import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = ({ expense, dispatch, history }) => (
  <div>
    <ExpenseForm
      expense={expense}
      onSubmit={() => {
        // Dispatch the action to edit the expense
        dispatch(editExpense(expense.id, expense));
        // Redirect to the dashboard
        history.push('/');
      }}
    />
    <button
      type="button"
      onClick={() => {
        dispatch(removeExpense({ id: expense.id }));
        history.push('/');
      }}
    >
      Remove
    </button>
  </div>
);

EditExpensePage.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.string
  }),
  history: PropTypes.func,
  dispatch: PropTypes.func
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditExpensePage);
