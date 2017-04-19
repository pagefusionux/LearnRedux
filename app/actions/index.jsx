const axios = require('axios');

/*
 * An action generator is a simple function that takes the items required to create an object
 * (in this case, 'name'), and returns the object with the 'type' set on it.
 *
 * */

// name action generators
export const changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name // shorthand for name: name
  }
};


// hobby action generators
export const addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
};


export const removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
};


// movie action generators
export const addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  }
};

export const removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  }
};


// map action generators
export const startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  }
};

export const completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  }
};

/*
 * This shows how you can use action generators to do asynchronous calls
 *
 * */
export const fetchLocation = () => {
  return (dispatch, getState) => {
    dispatch(startLocationFetch()); // show isLoading icon (for example)

    // asynchronous call
    axios.get('http://ipinfo.io').then(function(res) {
      const loc = res.data.loc;
      const baseUrl = 'https://maps.google.com?q=';

      dispatch(completeLocationFetch(baseUrl + loc)); // remove isLoading icon
    });
  };
};
