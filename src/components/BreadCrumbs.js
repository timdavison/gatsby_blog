import React from "react"

function BreadCrumbs() {
  return (
    <div className="campl-breadcrumb" id="breadcrumb">
      <ul className="campl-unstyled-list campl-horizontal-navigation clearfix">
        <li className="first-child">
          <a href="#" className="campl-home ir">
            Home
          </a>
        </li>
        <li>
          <a href="">Graduate Admissions</a>
        </li>
        <li>
          <a href="">Prospective Graduate Students</a>
        </li>
        <li>
          <a href="">Studying at Cambridge</a>
        </li>
        <li>
          <p className="campl-current">Qualifications directory</p>
        </li>
      </ul>
    </div>
  )
}

export default BreadCrumbs
