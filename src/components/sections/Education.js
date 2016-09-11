import React, { Component } from 'react';
import Section from './Section';
import education from '../../data/education';

class Education extends Component {
  render() {
    return (
      <div>
        <Section
          title="Education"
          id="education"
          data={education} />
      </div>
    )
  }
}

export default Education;