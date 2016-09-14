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
    let className = "success"
    let label = "University"
    switch(this.props.data.type) {
      case "personal":
        className = "info"
        label = "Personal"
        break;
      case "commercial":
        className = "primary"
        label = "Commercial"
        break;
      case "competition":
        className = "default"
        label = "Competition"
        break;
    }
    return(
        <span className={"tag tag-" + className}>{label}</span>
    )
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-2">
          { this.props.data.type ? this.type() : "" }
          <p>{this.props.data.date}</p>
          {
            this.props.data.hasOwnProperty('links')
            ? this.props.data.links.map(function(link, type) {
                return (
                  <a href={link.url} key={link.type} target="_blank">
                    <FaIcon type={link.type} />
                  </a>
                )
              })
            : ""
          }
        </div>
        <div className="col-lg-10">
          { this.props.data.title ? this.title() : '' }
          { this.description() }
        </div>
      </div>
    )
  }
}

export default SectionItem;