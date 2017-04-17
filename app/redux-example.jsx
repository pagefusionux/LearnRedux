const redux = require('redux');

console.log('Starting redux example');

/*
 * Purpose of reducer:
 *
 * - To set the default for the application state.
 * - To return the updated state given an action.
 * */
const stateDefault = {
  name: 'Anonymous',
  hobbies: [], // an array of hobby objects
  movies: [],
};

let nextHobbyId = 1;
let nextMovieId = 1;
const oldReducer = (state = stateDefault, action) => {

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
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };
    case 'REMOVE_HOBBY':
      return {
        ...state,
        hobbies: state.hobbies.filter((hobby) => {
          // return true: keep in array
          // return false: remove from array
          return hobby.id !== action.id
        })
      };
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId++,
            title: action.title,
            genre: action.genre,
          }
        ]
      };
    case 'REMOVE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.id)
      };
    default:
      return state;
  }
};

// separate reducers
const nameReducer = (state = 'Anonymous', action) => { // we don't worry about state being an object anymore
  switch(action.type) {
    case 'CHANGE_NAME':
      return action.name;

    default:
      return state;
  }
};

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


// output current state
console.log('currentState:', store.getState());

// dispatch action to store
store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Chris'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Walking'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Christopher'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'The Big Short',
  genre: 'Documentary'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Big Trouble in Little China',
  genre: 'Action'
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
});
