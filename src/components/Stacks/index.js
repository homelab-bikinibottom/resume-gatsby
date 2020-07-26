import React from 'react';

import stacksData from "../../data/stacks"
import ListItem from "./ListItem"

export default function Stacks(props) {
  return (
    <div id="development-stacks">
      <div className="row">
        <div className="col-lg-12">
          <p className="lead">
            Select a stack to filter related experience and works.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <ListItem
            data={stacksData.backend}
            filters={props.filters}
            handleSetFilters={props.handleSetFilters} />
        </div>
        <div className="col-lg-4">
          <ListItem
            data={stacksData.frontend}
            filters={props.filters}
            handleSetFilters={props.handleSetFilters} />
        </div>
        <div className="col-lg-4">
          <ListItem
            data={stacksData.supports}
            filters={props.filters}
            handleSetFilters={props.handleSetFilters} />
        </div>
      </div>
    </div>
  )
}
