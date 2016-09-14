import React, { Component } from 'react';
import Sidebar from './Sidebar';
import DevelopmentStacks from './sections/DevelopmentStacks';
import SectionWrapper from './sections/SectionWrapper';

class MainComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="header clearfix">
          <nav>
            <ul className="nav nav-pills pull-xs-right">
              <li className="nav-item">
                <a className="nav-link active" href="#">Resume <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://eamca.com" target="_blank">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://blog.eamca.com" target="_blank">Blog</a>
              </li>
            </ul>
          </nav>
          <h3 className="text-muted">Resume</h3>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="jumbotron">
              <h1 className="display-3" id="greeting-message" style={{color:'#eceeef'}}>Hello,</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <DevelopmentStacks />
            <SectionWrapper title="Experience" id="experience" const="EXPERIENCE" />
            <SectionWrapper title="Education" id="education" const="EDUCATION" />
            <SectionWrapper title="Projects" id="projects" const="PROJECTS" />
            <SectionWrapper title="Volunteer" id="volunteer" const="VOLUNTEER" />
            <SectionWrapper title="Soft Skills" id="soft-skills" const="SOFT_SKILLS" />
            <SectionWrapper title="Organisations" id="organisations" const="ORGANISATIONS" />
          </div>
          <div className="col-lg-4">
            <Sidebar />
          </div>
        </div>

        <footer className="footer">
          <p>
            &copy; Rizky Noor Ichwan 2016.<br />
            Layout taken and modified from <a href="http://v4-alpha.getbootstrap.com/examples/narrow-jumbotron/" target="_blank">Bootstrap Examples</a>.
          </p>
        </footer>
      </div>
    )
  }
}

export default MainComponent;