import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = expense => {
    // eslint-disable-next-line no-shadow
    const { addExpense, history } = this.props;
    addExpense(expense);
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
  addExpense: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

const mapDispatchToProps = dispatch => ({
  addExpense: expense => dispatch(addExpense(expense)) // same name as action generator in upper which is confusing
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddExpensePage);
