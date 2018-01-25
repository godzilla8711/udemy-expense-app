import {createStore} from 'redux';

const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      const incrementBy = action.incrementBy || 1;
      return {
        count: state.count + incrementBy
      }
    }
    case 'DECREMENT': {
      const decrementBy = action.decrementBy || 1;
      return {
        count: state.count - decrementBy
      }
    }
    case 'RESET': {
      return {
        count: 0
      }
    }
    default: {
      return state
    }
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT', incrementBy: 4 });
store.dispatch({ type: 'RESET' });
store.dispatch({ type: 'DECREMENT', decrementBy: 2});
store.dispatch({ type: 'DECREMENT' });

unsubscribe();
