import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Volunteer from './sections/Volunteer';

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
                <a className="nav-link" href="http://eamca.com">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://blog.eamca.com">Blog</a>
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
            <Experience />
            <Education />
            <Projects />
            <Volunteer />
          </div>
          <div className="col-lg-4">
            <Sidebar />
          </div>
        </div>
      </div>
    )
  }
}

export default MainComponent;