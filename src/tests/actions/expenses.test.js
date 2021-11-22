import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123' });
  expect(action).toEqual({ id: '123', type: 'REMOVE_EXPENSE' }); // Deep equal
});

test('Should set up edit expense action object', () => {
  const action = editExpense('123', { note: 'new notes' });
  expect(action).toEqual({
    id: '123',
    type: 'EDIT_EXPENSE',
    updates: { note: 'new notes' },
  });
});

test('Should setup add expense action object', () => {
  const expenseData = {
    description: 'Rent',
    amount: 123,
    createdAt: 1000,
    note: "This was last month's rent",
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test('Should set up ', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      createdAt: 0,
      note: '',
      amount: 0,
    },
  });
});
