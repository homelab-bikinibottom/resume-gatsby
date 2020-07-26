import React, { useState } from 'react';

import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Sections from '../components/Sections';
import Stacks from '../components/Stacks';
import SEO from '../components/seo';

export default function Home() {
  const [filters, setFilter] = useState([])
  return (
    <div className="container" >
      <SEO />
      <Header />
      <Jumbotron />
      <div className="row">
        <div className="col-lg-9">
          <Stacks
            filters={filters}
            handleSetFilters={(next) => setFilter((prev) => next === prev ? [] : next )}
          />
          <Sections filters={filters} />
        </div>
        <div className="col-lg-3">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  )
}
