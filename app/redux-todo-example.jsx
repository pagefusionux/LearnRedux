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

  switch(action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
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
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Dog'
});

// see the change
console.log('searchText should now be Dog:', store.getState());


