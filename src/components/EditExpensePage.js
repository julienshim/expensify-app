import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = onSubmitExpense => {
    // eslint-disable-next-line no-shadow
    const { startEditExpense, history, expense } = this.props;
    startEditExpense(expense.id, onSubmitExpense);
    history.push('/');
  };

  onRemove = () => {
    // eslint-disable-next-line no-shadow
    const { startRemoveExpense, expense, history } = this.props;
    startRemoveExpense({ id: expense.id });
    history.push('/');
  };

  render() {
    const { expense } = this.props;
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm expense={expense} onSubmit={this.onSubmit} />
          <button
            className="button button--secondary"
            type="button"
            onClick={this.onRemove}
          >
            Remove Expense
          </button>
        </div>
      </div>
    );
  }
}

EditExpensePage.propTypes = {
  startRemoveExpense: PropTypes.func,
  startEditExpense: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  expense: PropTypes.shape({
    id: PropTypes.string
  })
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: data => dispatch(startRemoveExpense(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
