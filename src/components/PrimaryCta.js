import React from "react"
import ctaStyles from "./PrimaryCta.module.css"

function PrimaryCta(props) {
  alert(ctaStyles.camplPrimaryCta)
  return (
    <a href={props.url} className={ctaStyles.camplPrimaryCta}>
      {props.text}
    </a>
  )
}

export default PrimaryCta
