import React, { Component } from 'react';

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
              <div className="list-group">
                <div className="list-group-item list-group-item-action active">
                  <h5 className="list-group-item-heading">Back-end</h5>
                  <p className="list-group-item-text">Languages and frameworks.</p>
                </div>
                <a href="#" className="list-group-item list-group-item-action">Ruby, Ruby on Rails, Rspec</a>
                <a href="#" className="list-group-item list-group-item-action">PHP, CodeIgniter, Yii</a>
                <a href="#" className="list-group-item list-group-item-action">Python, Django</a>
                <a href="#" className="list-group-item list-group-item-action">C#, .NET</a>
                <a href="#" className="list-group-item list-group-item-action">Java</a>
              </div>
          </div>
          <div className="col-lg-4">
              <div className="list-group">
                <div className="list-group-item list-group-item-action active">
                  <h5 className="list-group-item-heading">Front-end</h5>
                  <p className="list-group-item-text">Scripting and styling.</p>
                </div>
                <a href="#" className="list-group-item list-group-item-action">HTML5, CSS, Bootstrap</a>
                <a href="#" className="list-group-item list-group-item-action">Javascript, jQuery</a>
                <a href="#" className="list-group-item list-group-item-action">ES2015, CoffeeScript, ReactJS, Redux, Node.js, Mocha, Chai</a>
              </div>
          </div>
          <div className="col-lg-4">
              <div className="list-group">
                <div className="list-group-item list-group-item-action active">
                  <h5 className="list-group-item-heading">Supports</h5>
                  <p className="list-group-item-text">Databases, operating systems, and tools.</p>
                </div>
                <a href="#" className="list-group-item list-group-item-action">MySQL, MSSQL, PostgreSQL, MongoDB</a>
                <a href="#" className="list-group-item list-group-item-action">Windows, OS X, Linux (Debian, Ubuntu, ArchLinux, and openSUSE)</a>
                <a href="#" className="list-group-item list-group-item-action">Docker, Slack, Trello, Webpack, Travis CI</a>
                <a href="#" className="list-group-item list-group-item-action">Android Development and RESTful API</a>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default DevelopmentStacks;
