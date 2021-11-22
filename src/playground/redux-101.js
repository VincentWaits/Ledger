import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 }) => ({
  type: 'INCREMENT',
  incrementBy: incrementBy,
});

const store = createStore((state = { count: 0 }, { type, incrementBy = 1 }) => {
  switch (type) {
    case 'INCREMENT':
      return {
        count: state.count + incrementBy,
      };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 100 }));

//Increment the count
