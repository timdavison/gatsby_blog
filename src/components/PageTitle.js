import React from "react"

function PageTitle(props) {
  return (
    <div className="campl-wrap clearfix campl-page-sub-title campl-recessed-sub-title">
      <div className="campl-column3 campl-spacing-column">&nbsp;</div>
      <div className="campl-column9">
        <div className="campl-content-container">
          <p className="campl-sub-title">{props.titleText}</p>
        </div>
      </div>
    </div>
  )
}

export default PageTitle
