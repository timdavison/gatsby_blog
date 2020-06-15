import React from "react"
import BreadCrumbs from "./BreadCrumbs"

function SiteTitle(props) {
  return (
    <div className="campl-row campl-page-header campl-sub-section-page">
      <div className="campl-wrap clearfix">
        <div className="campl-column12">
          <div className="campl-content-container">
            <BreadCrumbs />
            <p className="campl-page-title">{props.titleText}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiteTitle
