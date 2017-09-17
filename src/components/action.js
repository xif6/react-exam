/**
 * Created by thomashourlier on 2/26/17.
 */

import axios from 'axios';

export function fetchJedi() {
  return (dispatch) => {
    axios.get('http://localhost:3001/jedi')
      .then((res) => {
        dispatch({
          type: 'FETCH_FINISH',
          payload: res.data,
        });
      })
  }
}

export function addJedi(jedi) {
  // without backend
  jedi.id = Date.now();
  return (dispatch) => {
    dispatch({
      type: 'ADD_JEDI',
      payload: jedi,
    });
  }
  // with backend
  /*
  return (dispatch) => {
    axios.post('http://localhost:3001/jedi', jedi)
      .then((res) => {
        dispatch({
          type: 'ADD_JEDI',
          payload: res.data,
        });
      })
  }
  */
}
