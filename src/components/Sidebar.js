import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar-wrapper" style={{position:"relative"}}>
        <div className="card card-inverse" style={{backgroundColor:'#333', borderColor:'#333'}}>
          <div className="card-block">
            <h3 className="card-title">Rizky Noor Ichwan</h3>
            <p className="card-text">Web developer enthusiast based in Melbourne, Australia.</p>
            <a href="http://github.eamca.com" className="card-link" target="_blank" alt="GitHub page">
              <i className="fa fa-github fa-2x"></i>
            </a>
            <a href="http://linkedin.eamca.com" className="card-link" target="_blank" alt="LinkedIn Profile">
              <i className="fa fa-linkedin fa-2x"></i>
            </a>
            <a href="mailto:hi@eamca.com" className="btn btn-primary pull-xs-right">
              <i className="fa fa-envelope"></i> Send email
            </a>
          </div>
        </div>
        <nav id="sidebar-nav">
          <ul className="nav nav-pills nav-stacked">
            <li className="nav-item">
              <a className="nav-link" href="#development-stacks">
                Development Stacks
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#volunteer">
                Volunteer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#soft-skills">
                Soft Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#organisations">
                Organisations
              </a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
