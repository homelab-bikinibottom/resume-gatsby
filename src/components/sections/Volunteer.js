import React, { Component } from 'react';
import Section from './Section';
import volunteer from '../../data/volunteer';

class Volunteer extends Component {
  render() {
    return (
      <div>
        <Section
          title="Volunteer"
          id="volunteer"
          data={volunteer} />
      </div>
    )
  }
}

export default Volunteer;