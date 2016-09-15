import * as types from '../constants/sectionConst';

const initialState = {
  all_data: []
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
  }
  return state;

}

export default sectionReducer;