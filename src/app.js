import ReactDOM from 'react-dom';
import React from 'react';
import AppRouter from './routers/appRouter';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import { addExpense } from './actions/expenses';
import { Provider } from 'react-redux';
const store = configureStore();

store.dispatch(addExpense({ description: 'water bill', amount: 4500 }));
store.dispatch(
  addExpense({ description: 'gas bill', amount: 0, createdAt: 1000 })
);
store.dispatch(addExpense({ description: 'rent bill', amount: 1950 }));

const jsx = (
  <Provider store={store}>
    <AppRouter></AppRouter>
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
