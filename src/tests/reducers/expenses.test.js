import moment from "moment";
import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// should add expense

test("should add expense", () => {
  const action = {
    type: "ADD_EXPENSE",
    expense: {
      id: "4",
      description: "Hotdog Ryan",
      note: "",
      amount: 65000,
      createdAt: moment(0)
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    expenses[0],
    expenses[1],
    expenses[2],
    {
      id: "4",
      description: "Hotdog Ryan",
      note: "",
      amount: 65000,
      createdAt: moment(0)
    }
  ]);
});

// should edit expense

test("should not remove expenses if id not found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "1",
    updates: {
      amount: 2000000000
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    {
      ...expenses[0],
      amount: 2000000000
    },
    expenses[1],
    expenses[2]
  ]);
});

// should not edit expense if expense not found

test("should not remove expenses if id not found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
