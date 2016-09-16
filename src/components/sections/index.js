import React, { Component } from 'react';
import { connect } from 'react-redux';
import DevelopmentStacks from './DevelopmentStacks';
import SectionWrapper from './SectionWrapper';
import * as actions from '../../actions/sectionAction';

class Sections extends Component {
  handleSetFilters(filters) {
    filters.every((e, i) => e === this.props.filters[i])
      ? this.props.dispatch(actions.clearFilters())
      : this.props.dispatch(actions.setFilters(filters))
  }

  render() {
    return (
      <div>
        <DevelopmentStacks handleSetFilters={this.handleSetFilters.bind(this)} />
        <SectionWrapper title="Experience" id="experience" />
        <SectionWrapper title="Education" id="education" />
        <SectionWrapper title="Projects" id="projects" />
        <SectionWrapper title="Volunteer" id="volunteer" />
        <SectionWrapper title="Soft Skills" id="soft-skills" />
        <SectionWrapper title="Organisations" id="organisations" />
      </div>
    )
  }
}

const mapStateToProps = function(state, ownProps) {
  const { filters } = state.sections
  return {
    filters
  }
}

export default connect(mapStateToProps)(Sections);