import React, { useEffect } from 'react';
import { ScrollSpy } from 'bootstrap/dist/js/bootstrap.esm'

import Section from './Section';
import experience from '../../data/experience';
import education from '../../data/education';
import projects from '../../data/projects';
import volunteer from '../../data/volunteer';
import softSkills from '../../data/soft-skills';
import organisations from '../../data/organisations';

export default function Sections({ filters }) {
  useEffect(() => {
    new ScrollSpy(document.body, {
      offset: 0,
      target: '#sidebar-nav'
    })
  })

  return (
    <div id="sections">
      <Section filters={filters} title="Experience" id="experience" data={experience} />
      <Section filters={filters} title="Education" id="education" data={education} />
      <Section filters={filters} title="Projects" id="projects" data={projects} />
      <Section filters={filters} title="Volunteer" id="volunteer" data={volunteer} />
      <Section filters={filters} title="Soft Skills" id="soft-skills" data={softSkills} />
      <Section filters={filters} title="Organisations" id="organisations" data={organisations} />
    </div>
  )
}
