import * as types from '../constants/sectionConst';

const initialState = {
  data: [],
  filter: []
};

const sectionReducer = function(state = initialState, action) {
  switch(action.type) {
    case types.IMPORT_DATA:
      if ( action.section && action.data ) {
        state.data.push({ section: action.section, data: action.data });
        return Object.assign( {}, state );
      } else {
        return state
      }
      break;
    case types.SET_FILTER:
      return Object.assign( {}, state, { filter } );
      break;
  }
  return state;

}

export default sectionReducer;