import React, { Component, PropTypes } from 'react';

class FaIcon extends Component {
  render() {
    let chosenIcon = "";
    switch(this.props.type){
      case "github":
        chosenIcon = "fa-github-alt";
      break;
      default:
        chosenIcon = "fa-globe"
      break;
    }
    return (
      <i className={"fa fa-border fa-lg " + chosenIcon}></i>
    )
  }
}


FaIcon.propTypes = {
  type: PropTypes.string.isRequired
}

export default FaIcon;