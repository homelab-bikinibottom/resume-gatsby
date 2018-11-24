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

export const setFilters = (filters) => {
  return {
    type: types.SET_FILTERS,
    filters
  }
}

export const clearFilters = () => {
  return {
    type: types.CLEAR_FILTERS
  }
}

export const filteredData = (section, filtered_data) => {
  return {
    type: types.LOAD_FILTERED_DATA,
    section,
    filtered_data
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

export const loadFilteredData = (section, filters, all_data) => {
  let filtered_data = []
  all_data.map(function(data) {
    if(data.hasOwnProperty('keywords')) {
      for(let i = 0; i < filters.length; i++){
        if(data.keywords.some(elem => elem === filters[i])) {
          filtered_data.push(data)
          break
        }
      }
    }
  })
  return (dispatch) => {
    dispatch(filteredData(section, filtered_data))
  }
}