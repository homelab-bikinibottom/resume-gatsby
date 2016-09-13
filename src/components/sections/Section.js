import React, { Component, PropTypes } from 'react';
import SectionItem from './SectionItem';

class Section extends Component {
  // filtering_data() {
  //   if(this.props.hasOwnProperty('filter')) {
  //     const filtered_data = [];
  //     this.props.data.map(function(data, key) {
  //       data.keywords.map(function(keyword){
  //         if(this.props.filter.some(elem => elem === keyword)){
  //           filtered_data.push(data);
  //         }
  //       })
  //     })
  //   } else {
  //     this.props.data      
  //   }
  // }

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

Section.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
}

export default Section;