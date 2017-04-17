const redux = require('redux');

console.log('Starting redux example');

/*
 * Purpose of reducer:
 *
 * - To set the default for the application state.
 * - To return the updated state given an action.
 * */
const reducer = (state = {name: 'Anonymous'}, action) => {

  /*
   *  'reducer' is a pure function which returns a new object created from
   *  the passed-in state and new values for any changed properties (according to action.type)
   * */

  switch(action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };

    default:
      return state;
  }
};

// create store
const store = redux.createStore(reducer, redux.compose(
  // redux developer tools stuff
  window.devToolsExtension ? window.devToolsExtension() : f => f // shorthand for: (f) => { return f; }
));

// subscribe to changes
const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  console.log('name is:', state.name);
  document.getElementById('app').innerHTML = state.name;
});
// unsubscribe();


// output current state
console.log('currentState:', store.getState());

// dispatch action to store
store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Chris'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Brad'
});
