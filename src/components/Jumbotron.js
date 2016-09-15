import React, { Component } from 'react';

class Jumbotron extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="jumbotron">
            <h1 className="display-3" id="greeting-message" style={{color:'#eceeef'}}>Hello,</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Jumbotron;