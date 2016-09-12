import React, { Component } from 'react';
import FaIcon from '../FaIcon';

class SectionItem extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-2">
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
          <h4>
            {this.props.data.title} <small className="text-muted">{this.props.data.subTitle}</small>
          </h4>
          <ul>
          {
            this.props.data.descriptions.map(function(description, key) {
              return (
                <li key={key}>{description}</li>
              );
            })
          }
          </ul>
        </div>
      </div>
    )
  }
}

export default SectionItem;