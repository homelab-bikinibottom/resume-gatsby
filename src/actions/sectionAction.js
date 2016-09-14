import * as types from '../constants/sectionConst';
import experienceData from '../data/experience';
import educationData from '../data/education';
import projectsData from '../data/projects';
import volunteerData from '../data/volunteer';
import softSkillsData from '../data/soft-skills';
import organisationsData from '../data/organisations';

export const importData = (section, data) => {
  return {
    type: types.IMPORT_DATA,
    section,
    data
  }
}

export const loadData = (section) => {
  const dataSet = (() => {
    switch(section) {
      case "EXPERIENCE":
        return experienceData
        break;
      case "EDUCATION":
        return educationData
        break;
      case "PROJECTS":
        return projectsData
        break;
      case "VOLUNTEER":
        return volunteerData
        break;
      case "SOFT_SKILLS":
        return softSkillsData
        break;
      case "ORGANISATIONS":
        return organisationsData
        break;
    }
  })()
  return (dispatch) => {
    dispatch(importData(section, dataSet))
  }
}