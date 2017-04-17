const redux = require('redux');

console.log('Starting redux-todo-example');

// create object for app's default state
const stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

// create reducer
const reducer = (state = stateDefault, action) => {
  return state;
};

// create store
const store = redux.createStore(reducer);

// output current state
console.log('currentState:', store.getState());
