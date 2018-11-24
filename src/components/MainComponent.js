import React, { Component } from 'react';
import Header from './Header';
import Jumbotron from './Jumbotron';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Sections from './Sections';

class MainComponent extends Component {
  render() {
    return (
      <div className="container">
        <Header />

        <Jumbotron />

        <div className="row">
          <div className="col-lg-8">
            <Sections />
          </div>
          <div className="col-lg-4">
            <Sidebar />
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default MainComponent;