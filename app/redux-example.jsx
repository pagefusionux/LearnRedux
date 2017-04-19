const redux = require('redux');

console.log('Starting redux example');

// define actions
const actions = require('./actions/index');

// define store
const store = require('./store/configureStore').configure();

// subscribe to changes
const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  //document.getElementById('app').innerHTML = state.name;

  console.log('New state:', state);

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="'+ state.map.url +'" target="_blank">View Your Location</a>';
  }
});
// unsubscribe();

// output initial state
console.log('initial state:', store.getState());

// dispatch actions to store
store.dispatch(actions.fetchLocation()); // utilize redux-thunk (for doing asynchronous stuff)

store.dispatch(actions.changeName('Chris'));

store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Walking'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Emily'));

store.dispatch(actions.addMovie('The Big Short','Documentary'));
store.dispatch(actions.addMovie('Star Wars', 'Action'));

store.dispatch(actions.removeMovie(1));
