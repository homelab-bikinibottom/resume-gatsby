import React from 'react';

export default function Sidebar(props) {
  return (
    <div id="sidebar-wrapper">
      <div className="card text-white bg-dark mb-3">
        <div className="card-body">
          <h5 className="card-title">Rizky Noor Ichwan</h5>
          <p className="card-text">Agile driven, determined and enthusiast software developer based in Melbourne.</p>
          <a href="https://s.eamca.com/github" className="card-link" target="_blank" rel="noreferrer" alt="GitHub page">
            <span className="fab fa-github" style={{fontSize: '2em'}}></span>
          </a>
          <a href="https://s.eamca.com/linkedin" className="card-link" target="_blank" rel="noreferrer" alt="LinkedIn Profile">
            <span className="fab fa-linkedin" style={{fontSize: '2em'}}></span>
          </a>
          <a href="mailto:hi@eamca.com" className="btn btn-primary float-right">
            <span className="fas fa-envelope"></span> Message Me
          </a>
        </div>
      </div>
        <nav id="sidebar-nav" className="nav nav-pills flex-column">
          <a className="nav-link" href="#development-stacks">
            Development Stacks
          </a>
          <a className="nav-link" href="#experience">
            Experience
          </a>
          <a className="nav-link" href="#education">
            Education
          </a>
          <a className="nav-link" href="#projects">
            Projects
          </a>
          <a className="nav-link" href="#volunteer">
            Volunteer
          </a>
          <a className="nav-link" href="#soft-skills">
            Soft Skills
          </a>
          <a className="nav-link" href="#organisations">
            Organisations
          </a>
        </nav>
    </div>
  )
}
