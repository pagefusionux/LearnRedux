const redux = require('redux');

console.log('Starting redux example');

/*
 * Purpose of reducer:
 *
 * - To set the default for the application state.
 * - To return the updated state given an action.
 * */
const reducer = (state = {name: 'Anonymous'}, action) => {
  // no state? what's a good default?
  //state = state || { name: 'Anonymous' }; // ES 5 example

  return state;
};

const store = redux.createStore(reducer);

const currentState = store.getState();

console.log('currentState:', currentState);
