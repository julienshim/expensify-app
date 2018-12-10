// import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE

export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => dispatch => {
  const {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = expenseData;

  const expense = {
    description,
    note,
    amount,
    createdAt
  };

  database
    .ref('expenses')
    .push(expense)
    .then(ref => {
      dispatch(
        addExpense({
          id: ref.key,
          ...expense
        })
      );
    });
};

// REMOVE_EXPENSE
export const removeExpense = ({ id }) => ({
  // [1/2] Here we deconstruct because we passing in an object with id property
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE

export const editExpense = (id, updates) => ({
  // [1/2] Here we are not decontructing because we are passing in a straight value
  type: 'EDIT_EXPENSE',
  id,
  updates
});
