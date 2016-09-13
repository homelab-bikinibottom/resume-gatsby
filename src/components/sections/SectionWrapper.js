import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Section from './Section';
import { loadData } from '../../actions/sectionAction';

class SectionWrapper extends Component {
  componentDidMount() {
    this.props.dispatch(loadData(this.props.const))
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
  const data = (() => {
    if (store.sections.data.length > 0) {
      const temp = store.sections.data.find( (item) => { return item.section === ownProps.const })
      return temp.data
    } else {
      return []
    }
  })()
  return { 
    data
  }; 

}

SectionWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  const: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(SectionWrapper);