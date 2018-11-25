import React, { Component } from 'react';
import SectionItem from './SectionItem';

class Section extends Component {
  render() {
    return (
      <div>
      <div className="row">
        <div className="col-lg-12">
          <h2 id={this.props.id}>{this.props.title}</h2>
        </div>
      </div>
      {
        this.props.data.map(function(data, key) {
          return (
            <SectionItem data={data} key={key} />
          );
        })
      }
      </div>
    )
  }
}

export default Section;