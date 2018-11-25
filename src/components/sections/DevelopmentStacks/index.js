import React, { Component } from 'react';
import { connect } from 'react-redux';

import stacksData from "../../../data/stacks"
import ListItem from "./ListItem"

class DevelopmentStacks extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <h2 id="development-stacks">Development Stacks</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <ListItem
              data={stacksData.backend}
              handleSetFilters={this.props.handleSetFilters} />
          </div>
          <div className="col-lg-4">
            <ListItem
              data={stacksData.frontend}
              handleSetFilters={this.props.handleSetFilters} />
          </div>
          <div className="col-lg-4">
            <ListItem
              data={stacksData.supports}
              handleSetFilters={this.props.handleSetFilters} />
          </div>
        </div>
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

export default connect(mapStateToProps)(DevelopmentStacks);
