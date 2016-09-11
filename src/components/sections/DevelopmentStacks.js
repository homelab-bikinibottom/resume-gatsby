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
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Back-end</h4>
                <p className="card-text">Languages and frameworks.</p>
              </div>
              <div className="list-group list-group-flush">
                <a href="#" className="list-group-item list-group-item-action">Ruby, <span className="tag tag-primary">Ruby on Rails</span>, Rspec</a>
                <a href="#" className="list-group-item list-group-item-action"><span className="tag tag-success">PHP</span>, CodeIgniter, Yii</a>
                <a href="#" className="list-group-item list-group-item-action">Python, Django</a>
                <a href="#" className="list-group-item list-group-item-action">C#, .NET</a>
                <a href="#" className="list-group-item list-group-item-action">Java</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Front-end</h4>
                <p className="card-text">Scripting and styling.</p>
              </div>
              <div className="list-group list-group-flush">
                <a href="#" className="list-group-item list-group-item-action">HTML5, CSS, Bootstrap</a>
                <a href="#" className="list-group-item list-group-item-action">Javascript, jQuery</a>
                <a href="#" className="list-group-item list-group-item-action">ES2015, CoffeeScript, <span className="tag tag-info">ReactJS</span>, Redux, Node.js, Mocha, Chai</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Supports</h4>
                <p className="card-text">Databases, operating systems, and tools.</p>
              </div>
              <div className="list-group list-group-flush">
                <a href="#" className="list-group-item list-group-item-action">MySQL, MSSQL, PostgreSQL, MongoDB</a>
                <a href="#" className="list-group-item list-group-item-action">Windows, OS X, Linux (Debian, Ubuntu, ArchLinux, and openSUSE)</a>
                <a href="#" className="list-group-item list-group-item-action">Docker, Slack, Trello, Webpack, Travis CI</a>
                <a href="#" className="list-group-item list-group-item-action">Android Development and RESTful API</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DevelopmentStacks;
