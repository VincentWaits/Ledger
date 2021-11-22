import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
// Expenses reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        }
        return expense;
      });
    default:
      return state;
  }
};

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

// Add expense
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0,
}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

// Remove Expense
const removeExpense = ({ id } = {}) => {
  return {
    type: 'REMOVE_EXPENSE',
    id,
  };
};
// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date',
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount',
      };
    case 'SET_START_DATE':
      return {
        ...state,
        endDate: action.startDate,
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate,
      };

    default:
      return filtersReducerDefaultState;
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

// Get visable expenses
const getVisableExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch =
      typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch =
      typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expenses.description
      .toLowerCase()
      .includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  });
};

store.subscribe(() => {
  const state = store.getState();
  const visableExpenses = getVisableExpenses(state.expenses, state.filters);
  console.log();
});

store.dispatch(addExpense({ description: 'rent', amount: 224, created: -10 }));
const expense2 = store.dispatch(
  addExpense({ description: 'coffee', amount: 12, created: 12 })
);

//store.dispatch(removeExpense({ id: expense2.expense.id }));
store.dispatch(editExpense(expense2.expense.id, { amount: 5 }));

const setTextFilter = (text = '') => {
  return {
    type: 'SET_TEXT_FILTER',
    text,
  };
};

store.dispatch(setTextFilter('rent'));

// Sort by date
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate,
});

const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate,
});

store.dispatch(setStartDate(125));
store.dispatch(setEndDate(125));

const demoState = {
  expenses: [
    {
      id: 'bobby',
      description: 'January rent',
      note: 'This was the final payment for that address',
      amount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', //Date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
