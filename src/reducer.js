/**
 * Created by thomashourlier on 2/26/17.
 */

import { combineReducers } from 'redux';

function jediReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_FINISH':
      return [
        ...action.payload,
        ...state,
      ];
    case 'ADD_JEDI':
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
}

export default combineReducers({
  jedi: jediReducer,
});
