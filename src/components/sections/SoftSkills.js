import React, { Component } from 'react';
import Section from './Section';
import soft_skills from '../../data/soft-skills';

class SoftSkills extends Component {
  render() {
    return (
      <div>
        <Section
          title="Soft Skills"
          id="soft-skills"
          data={soft_skills} />
      </div>
    )
  }
}

export default SoftSkills;