import React, { Component } from 'react';
import Section from './Section';
import experience from '../../data/experience';

class Experience extends Component {
  render() {
    return (
      <div>
        <Section
          title="Experience"
          id="experience"
          data={experience} />
      </div>
    )
  }
}

export default Experience;