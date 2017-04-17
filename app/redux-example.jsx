const redux = require('redux');
const axios = require('axios');

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

// Map Reducer and action generators
// -------------------
const mapReducer = (state = {isFetching: false, url: undefined}, action) => {
  switch(action.type) {
    case 'START_LOCATION_FETCH':
      return {
        isFetching: true,
        url: undefined
      };
    case 'COMPLETE_LOCATION_FETCH':
      return {
        isFetching: false,
        url: action.url
      };
    default:
      return state;

  }
};

const startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  }
};

const completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  }
};

/*
* This shows how you can use action generators to do asynchronous calls
*
* */
const fetchLocation = () => {
  store.dispatch(startLocationFetch()); // show isLoading icon (for example)

  // asynchronous call
  axios.get('http://ipinfo.io').then(function(res) {
    const loc = res.data.loc;
    const baseUrl = 'https://maps.google.com?q=';

    store.dispatch(completeLocationFetch(baseUrl + loc)); // remove isLoading icon
  });
};

// combine reducers
const reducer = redux.combineReducers({
  name: nameReducer, // 'name' state managed by 'nameReducer'
  hobbies: hobbiesReducer,
  movies: moviesReducer,
  map: mapReducer
});

// create store
const store = redux.createStore(reducer, redux.compose(
  // redux developer tools stuff
  window.devToolsExtension ? window.devToolsExtension() : f => f // shorthand for: (f) => { return f; }
));

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

fetchLocation();

// dispatch actions to store
store.dispatch(changeName('Chris'));

store.dispatch(addHobby('Running'));
store.dispatch(addHobby('Walking'));

store.dispatch(removeHobby(2));

store.dispatch(changeName('Emily'));

store.dispatch(addMovie('The Big Short','Documentary'));
store.dispatch(addMovie('Star Wars', 'Action'));

store.dispatch(removeMovie(1));
