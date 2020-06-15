/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import PlFooter from "./plfooter"
import PlHeader from "./plheader"
import SiteTitle from "./SiteTitle"
import SiteNav from "./SiteNav"
import PageTitle from "./PageTitle"
import PrimaryCta from "./PrimaryCta"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <PlHeader />
      <SiteTitle />
      <PrimaryCta url="/" text="Primary CTA test" />
      <SiteNav />
      <PageTitle />
      <div id="main" className="campl-row campl-content campl-recessed-content">
        {children}
      </div>
      <PlFooter />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
