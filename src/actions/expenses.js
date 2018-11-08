import uuid from "uuid";

// ADD_EXPENSE

export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
export const removeExpense = ({ id }) => ({
  // [1/2] Here we deconstruct because we passing in an object with id property
  type: "REMOVE_EXPENSE",
  id
});

// EDIT_EXPENSE

export const editExpense = (id, updates) => ({
  // [1/2] Here we are not decontructing because we are passing in a straight value
  type: "EDIT_EXPENSE",
  id,
  updates
});
