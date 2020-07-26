import React from 'react';
import { useStaticQuery, Link, graphql } from "gatsby"

export default function Header() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div className="header clearfix">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">{data.site.siteMetadata.title}</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Resume</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://eamca.com" target="_blank" rel="noreferrer">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://blog.eamca.com" target="_blank" rel="noreferrer">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
