import React from "react"
// import Quicklinks from "./quicklinks"
// import Search from "./search"
import logo from "../images/University-of-Cambridge-Logo-White-01.svg"

function plheader() {
  return (
    <div className="campl-row campl-global-header">
      <div className="campl-wrap clearfix">
        <div
          className="campl-header-container campl-column10"
          id="global-header-controls"
        >
          <a href="http://www.cam.ac.uk" className="campl-main-logo">
            <img
              src={logo}
              alt="University of Cambridge"
              className="cam-logo"
            />
          </a>
          <ul className="campl-unstyled-list campl-horizontal-navigation campl-global-navigation clearfix">
            <li>
              <a href="#study-with-us">Study at Cambridge</a>
            </li>
            <li>
              <a href="#about-the-university">About the University</a>
            </li>
            <li>
              <a
                href="http://www.cam.ac.uk/research"
                className="campl-no-drawer"
              >
                Research at Cambridge
              </a>
            </li>
          </ul>
        </div>
        <div className="campl-column2"></div>
      </div>
    </div>
  )
}

export default plheader
