import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Section from './Section';
import { loadSectionData } from '../../actions/sectionAction';

class SectionWrapper extends Component {
  componentDidMount() {
    this.props.dispatch(loadSectionData(this.props.id))
  }

  render() {
    return (
      <div>
        <Section
          title={this.props.title}
          id={this.props.id}
          data={this.props.data} />
      </div>
    )
  }
}

const mapStateToProps = function(store, ownProps) { 
  return { 
    data: store.sections.data.length
          ? store.sections.data.find( (item) => { return item.section === ownProps.id }).data
          : []
  }; 

}

SectionWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(SectionWrapper);