import React, { Component } from 'react';
import FaIcon from '../FaIcon';

class SectionItem extends Component {
  title() {
    return (
      <h4>
        {this.props.data.title} <small className="text-muted">{this.props.data.subTitle}</small>
      </h4>
    )
  }

  description() {
    return (
      <ul>
      {
        this.props.data.descriptions.map(function(description, key) {
          return (
            <li key={key}>{description}</li>
          );
        })
      }
      </ul>
    )
  }

  type() {
    let className = "primary"
    let label = "University"
    switch(this.props.data.type) {
      case "personal":
        className = "info"
        label = "Personal"
        break;
      case "professional":
        className = "success"
        label = "Professional"
        break;
      case "competition":
        className = "secondary"
        label = "Competition"
        break;
      default:
        break;
    }
    return(
      <span className={"badge bg-" + className}>{label}</span>
    )
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-2 d-flex flex-column pt-2">
          { this.props.data.type ? this.type() : "" }
          <small>{this.props.data.date.human}</small>
          <URLs {...this.props} />
        </div>
        <div className="col-lg-10">
          { this.props.data.title ? this.title() : '' }
          { this.description() }
        </div>
      </div>
    )
  }
}

function URLs({ data }) {
  if (!data.hasOwnProperty('links')) return null
  return (
      <div className="d-flex">
        {
          data.links.map((link, key) => (
            <a href={link.url} key={key} target="_blank" rel="noreferrer" className="mr-2 link-secondary">
              <FaIcon type={link.type} />
            </a>
          ))
        }
      </div>
  )
}

export default SectionItem;