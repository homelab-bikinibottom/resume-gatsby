import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Section from './Section';
import * as action from '../../actions/sectionAction';

class SectionWrapper extends Component {
  componentDidMount() {
    this.props.dispatch(action.loadSectionData(this.props.id))
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.filters.every((e, i) => e != nextProps.filters[i]) && nextProps.filters.length > 0) {
      this.props.dispatch(action.loadFilteredData(
        this.props.id,
        nextProps.filters,
        this.props.all_data
      ))
    }
  }

  dataSource() {
    return this.props.filters.length
      ? this.props.filtered_data
      : this.props.all_data
  }

  render() {
    return (
      <div>
        <Section
          title={this.props.title}
          id={this.props.id}
          data={this.dataSource()} />
      </div>
    )
  }
}

const mapStateToProps = function(state, ownProps) { 
  const { all_data, filters, filtered_data } = state.sections
  const check_filtered_data = ownProps.id in filtered_data ? filtered_data[ownProps.id].data : []
  return { 
    filters,
    filtered_data: check_filtered_data,
    all_data: all_data.length
          ? all_data.find( (item) => { return item.section === ownProps.id }).data
          : []
  }; 
}

SectionWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(SectionWrapper);