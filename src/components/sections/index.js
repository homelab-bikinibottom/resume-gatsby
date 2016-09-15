import React, { Component } from 'react';
import DevelopmentStacks from './DevelopmentStacks';
import SectionWrapper from './SectionWrapper';

class Sections extends Component {
  render() {
    return (
      <div>
        <DevelopmentStacks />
        <SectionWrapper title="Experience" id="experience" />
        <SectionWrapper title="Education" id="education" />
        <SectionWrapper title="Projects" id="projects" />
        <SectionWrapper title="Volunteer" id="volunteer" />
        <SectionWrapper title="Soft Skills" id="soft-skills" />
        <SectionWrapper title="Organisations" id="organisations" />
      </div>
    )
  }
}

export default Sections