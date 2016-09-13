import { combineReducers } from 'redux';

// Reducers
import sectionReducer from './sectionReducer';

// Combine Reducers
const reducers = combineReducers({
  sections: sectionReducer
});

export default reducers;