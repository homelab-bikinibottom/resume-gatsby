import React, { Component } from 'react';
import DevelopmentStacks from './DevelopmentStacks';
import SectionWrapper from './SectionWrapper';

class Sections extends Component {
  render() {
    return (
      <div>
        <DevelopmentStacks />
        <SectionWrapper title="Experience" id="experience" const="EXPERIENCE" />
        <SectionWrapper title="Education" id="education" const="EDUCATION" />
        <SectionWrapper title="Projects" id="projects" const="PROJECTS" />
        <SectionWrapper title="Volunteer" id="volunteer" const="VOLUNTEER" />
        <SectionWrapper title="Soft Skills" id="soft-skills" const="SOFT_SKILLS" />
        <SectionWrapper title="Organisations" id="organisations" const="ORGANISATIONS" />
      </div>
    )
  }
}

export default Sections