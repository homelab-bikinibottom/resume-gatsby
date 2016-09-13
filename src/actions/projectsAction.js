import * as types from '../constants/projectsConst';
import projectsData from '../data/projects';

export const importData = (section) => {
  return {
    type: types.IMPORT_PROJECTS_DATA,
    section: section
  }
}

export const importDataSuccess = (section, projects) => {
  return {
    type: types.IMPORT_PROJECTS_DATA_SUCCESS,
    section: section,
    projects
  }
}

export const loadData = (section) => {
  return (dispatch) => {
    dispatch(importData(section))
    dispatch(importDataSuccess(section, projectsData))
  }
}