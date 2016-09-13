import * as types from '../constants/projectsConst';

const initialState = {
  projects: [],
  section: ''
};

const projectsReducer = function(state = initialState, action) {
  switch(action.type) {
    case types.IMPORT_PROJECTS_DATA:
      return Object.assign(
        {},
        state,
        {
          section: action.section
        }
      )
    case types.IMPORT_PROJECTS_DATA_SUCCESS:
      return Object.assign(
        {},
        state,
        {
          projects: action.projects
        }
      );
  }
  return state;

}

export default projectsReducer;