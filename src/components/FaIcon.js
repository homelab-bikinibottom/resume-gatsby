import React, { Component, PropTypes } from 'react';

class FaIcon extends Component {
  render() {
    return (
      <i className={"fa fa-border fa-lg fa-" + this.props.type}></i>
    )
  }
}


FaIcon.propTypes = {
  type: PropTypes.string.isRequired
}

export default FaIcon;