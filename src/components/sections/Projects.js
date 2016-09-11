import React, { Component } from 'react';
import Section from './Section';
import projects from '../../data/projects';

class Projects extends Component {
  render() {
    return (
      <div>
        <Section
          title="Projects"
          id="projects"
          data={projects} />
      </div>
    )
  }
}

export default Projects;