import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = expense => {
    // eslint-disable-next-line no-shadow
    const { startAddExpense, history } = this.props;
    startAddExpense(expense);
    history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

AddExpensePage.propTypes = {
  startAddExpense: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

const mapDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense)) // same name as action generator in upper which is confusing
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddExpensePage);
