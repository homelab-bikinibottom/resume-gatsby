import React, { PureComponent } from 'react';
import styled from 'styled-components';

class Sidebar extends PureComponent {
  state = { isSticky: false, top: 0 }
  componentDidMount() {
    this.setState({ top: $('#sidebar-wrapper').offset().top })
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scroll = $(window).scrollTop()

    if (scroll > this.state.top) {
      this.setState({ isSticky: true })
    } else {
      this.setState({ isSticky: false })
    }
  }

  render() {
    return (
      <Base id="sidebar-wrapper" isSticky={this.state.isSticky}>
        <div className="card text-white bg-dark mb-3">
          <div className="card-body">
            <h5 className="card-title">Rizky Noor Ichwan</h5>
            <p className="card-text">Agile driven, determined and enthusiast developer based in Melbourne.</p>
            <a href="http://github.eamca.com" className="card-link" target="_blank" alt="GitHub page">
              <i className="fa fa-github fa-2x"></i>
            </a>
            <a href="http://linkedin.eamca.com" className="card-link" target="_blank" alt="LinkedIn Profile">
              <i className="fa fa-linkedin fa-2x"></i>
            </a>
            <a href="mailto:hi@eamca.com" className="btn btn-primary float-right">
              <i className="fa fa-envelope"></i> Send email
            </a>
          </div>
        </div>
        <nav id="sidebar-nav">
          <ul className="nav nav-pills nav-stacked flex-column">
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
      </Base>
    )
  }
}

const Base = styled.div`
  ${({isSticky}) => isSticky && `
    position: sticky;
    top: 0;
  `}
`

export default Sidebar;
