import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Navbar = (props) => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/general">NewsLaunch</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/general">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" rel="noreferrer" target="_blank" href="https://github.com/dattpanchal04">GitHub</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/business">Business</a></li>
                  <li><a className="dropdown-item" href="/entertainment">Entertainment</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/general">General</Link></li>
                  <li><Link className="dropdown-item" to="/health">Health</Link></li>
                  <li><Link className="dropdown-item" to="/science">Science</Link></li>
                  <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                  <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
