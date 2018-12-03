import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    // eslint-disable-next-line no-shadow
    const { editExpense, history } = this.props;
    editExpense(expense.id, expense);
    history.push('/');
  };

  onRemove = () => {
    // eslint-disable-next-line no-shadow
    const { removeExpense, expense, history } = this.props;
    removeExpense({ id: expense.id });
    history.push('/');
  };

  render() {
    const { expense } = this.props;
    return (
      <div>
        <ExpenseForm expense={expense} onSubmit={this.onSubmit} />
        <button type="button" onClick={this.onRemove}>
          Remove
        </button>
      </div>
    );
  }
}

EditExpensePage.propTypes = {
  removeExpense: PropTypes.func,
  editExpense: PropTypes.func,
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
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: data => dispatch(removeExpense(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
