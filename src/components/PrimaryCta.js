import React from "react"

function PrimaryCta(props) {
  return (
    <a href={props.url} className="campl-primary-cta">
      {props.text}
    </a>
  )
}

export default PrimaryCta
