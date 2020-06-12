import React from "react"

function SiteNav() {
  return (
    <div className="campl-row campl-page-header">
      <div
        className="campl-wrap clearfix campl-local-navigation"
        id="local-nav"
      >
        <p className="campl-closed campl-menu-btn" id="menu-btn">
          <a href="www.example.com">
            <span>Menu</span> <span className="campl-menu-btn-arrow"></span>
          </a>
        </p>
        <div className="campl-local-navigation-container">
          <ul className="campl-unstyled-list campl-current">
            <li className="campl-top">
              <a href="www.example.com">About us</a>
            </li>
            <li className="campl-top campl-sub">
              <a
                href="www.example.com"
                className="campl-selected"
                style={{ position: "relative" }}
              >
                Prospective Students
                <span className="campl-menu-indicator campl-fwd-btn"></span>
              </a>
              <ul className="campl-unstyled-list local-dropdown-menu">
                <li className="campl-back-link">
                  <a href="www.example.com">
                    <span className="campl-back-btn campl-menu-indicator"></span>
                    Back to section home
                  </a>
                </li>
                <li className="campl-title">
                  <a href="www.example.com">Prospective Students</a>
                </li>
                <li>
                  <a href="www.example.com">Site map</a>
                </li>
              </ul>
            </li>
            <li className="campl-top">
              <a href="www.example.com">Item 1</a>
            </li>
            <li className="campl-top">
              <a href="www.example.com">Item 2</a>
            </li>
            <li className="campl-top">
              <a href="www.example.com">Item 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SiteNav
