import React, { Component } from 'react';

class FaIcon extends Component {
  render() {
    return (
      <i className={"fa fa-border fa-lg fa-" + this.props.type}></i>
    )
  }
}

export default FaIcon;