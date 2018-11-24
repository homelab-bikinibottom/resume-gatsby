import * as types from '../constants/sectionConst';

const initialState = {
  all_data: [],
  filtered_data: [],
  filters: []
};

const sectionReducer = function(state = initialState, action) {
  switch(action.type) {
    case types.IMPORT_SECTION_DATA:
      if ( action.section && action.all_data ) {
        state.all_data.push({ section: action.section, data: action.all_data });
        return Object.assign( {}, state );
      } else {
        return state
      }
      break;
    case types.SET_FILTERS:
      return Object.assign( {}, state, {
        filters: action.filters
      });
      break;
    case types.CLEAR_FILTERS:
      return Object.assign( {}, state, {
        filters: [],
        filtered_data: []
      });
      break;
    case types.LOAD_FILTERED_DATA:
      if ( action.section && action.filtered_data ) {
        state.filtered_data[action.section] = { data: action.filtered_data }
        // state.filtered_data.push({ section: action.section, data: action.filtered_data });
        return Object.assign( {}, state );
      } else {
        return state
      }
      break;
  }
  return state;

}

export default sectionReducer;