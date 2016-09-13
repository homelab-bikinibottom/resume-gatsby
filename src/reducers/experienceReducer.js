import * as types from '../constants/sectionConst';

const initialState = {
  data: [],
  section: ''
};

const experienceReducer = function(state = initialState, action) {
  switch(action.type) {
    case types.IMPORT_DATA:
      return Object.assign(
        {},
        state,
        {
          section: action.section
        }
      )
    case types.IMPORT_DATA_SUCCESS:
      return Object.assign(
        {},
        state,
        {
          section: action.section,
          data: action.data
        }
      );
  }
  return state;

}

export default experienceReducer;