const redux = require('redux');
const thunk = require('redux-thunk').default;
const {nameReducer, hobbiesReducer, moviesReducer, mapReducer} = require('./../reducers/index');

export const configure = () => {
  // combine reducers
  const reducer = redux.combineReducers({
    name: nameReducer, // 'name' state managed by 'nameReducer'
    hobbies: hobbiesReducer,
    movies: moviesReducer,
    map: mapReducer
  });

  // create store
  const store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    // redux developer tools stuff
    window.devToolsExtension ? window.devToolsExtension() : f => f // shorthand for: (f) => { return f; }
  ));

  return store;
};
