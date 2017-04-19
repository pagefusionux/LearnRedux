/*
 * Purpose of reducer:
 *
 * - To set the default for the application state.
 * - To return the updated state given an action.
 * */

// name Reducer
export const nameReducer = (state = 'Anonymous', action) => { // we don't worry about state being an object anymore
  switch(action.type) {
    case 'CHANGE_NAME':
      return action.name;

    default:
      return state;
  }
};


// hobbies Reducer
let nextHobbyId = 1;
export const hobbiesReducer = (state = [], action) => {
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


// movies Reducer
let nextMovieId = 1;
export const moviesReducer = (state = [], action) => {
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


// map Reducer
export const mapReducer = (state = {isFetching: false, url: undefined}, action) => {
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
