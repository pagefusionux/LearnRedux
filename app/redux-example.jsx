const redux = require('redux');

console.log('Starting redux example');

/*
 * Purpose of reducer:
 *
 * - To set the default for the application state.
 * - To return the updated state given an action.
 * */




// separate reducers

// name Reducer and action generators
// -------------------
const nameReducer = (state = 'Anonymous', action) => { // we don't worry about state being an object anymore
  switch(action.type) {
    case 'CHANGE_NAME':
      return action.name;

    default:
      return state;
  }
};
 /*
 * An action generator is a simple function that takes the items required to create an object
 * (in this case, 'name'), and returns the object with the 'type' set on it.
 *
 * */
const changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name // shorthand for name: name
  }
};

// hobbies Reducer and action generators
// -------------------
let nextHobbyId = 1;
const hobbiesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_HOBBY':
      return [
          ...state, // not state.hobbies, just state (because we're passing in state to begin with)
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ];
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id !== action.id)
    default:
      return state;
  }
};

const addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
};

const removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
};

// movies Reducer and action generators
// -------------------
let nextMovieId = 1;
const moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          title: action.title,
          genre: action.genre
        }
      ];
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id)
    default:
      return state;
  }
};

const addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  }
};

const removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  }
};

// combine reducers
const reducer = redux.combineReducers({
  name: nameReducer, // 'name' state managed by 'nameReducer'
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

// create store
const store = redux.createStore(reducer, redux.compose(
  // redux developer tools stuff
  window.devToolsExtension ? window.devToolsExtension() : f => f // shorthand for: (f) => { return f; }
));

// subscribe to changes
const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  document.getElementById('app').innerHTML = state.name;

  console.log('New state:', state);
});
// unsubscribe();

// output initial state
console.log('initial state:', store.getState());

// dispatch actions to store
store.dispatch(changeName('Chris'));

store.dispatch(addHobby('Running'));
store.dispatch(addHobby('Walking'));

store.dispatch(removeHobby(2));

store.dispatch(changeName('Emily'));

store.dispatch(addMovie('The Big Short','Documentary'));
store.dispatch(addMovie('Star Wars', 'Action'));

store.dispatch(removeMovie(1));
