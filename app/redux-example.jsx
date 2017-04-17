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
const store = redux.createStore(reducer);

// output current state
console.log('currentState:', store.getState());

// dispatch action to store
store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Chris'
});

// see the change
console.log('Name should now be Chris:', store.getState());
