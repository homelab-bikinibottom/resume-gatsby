import * as types from '../constants/sectionConst';
import experienceData from '../data/experience';
import educationData from '../data/education';
import projectsData from '../data/projects';
import volunteerData from '../data/volunteer';
import softSkillsData from '../data/soft-skills';
import organisationsData from '../data/organisations';

export const importSectionData = (section, all_data) => {
  return {
    type: types.IMPORT_SECTION_DATA,
    section,
    all_data
  }
}

export const loadSectionData = (section) => {
  const dataSet = (() => {
    switch(section) {
      case "experience":
        return experienceData
        break;
      case "education":
        return educationData
        break;
      case "projects":
        return projectsData
        break;
      case "volunteer":
        return volunteerData
        break;
      case "soft-skills":
        return softSkillsData
        break;
      case "organisations":
        return organisationsData
        break;
    }
  })()
  return (dispatch) => {
    dispatch(importSectionData(section, dataSet))
  }
}