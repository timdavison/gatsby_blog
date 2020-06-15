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

const Layout = ({ children, page }) => {
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
      <SiteTitle titleText={data.site.siteMetadata.title} />
      <PrimaryCta url="/" text="Primary CTA test" />
      <SiteNav />
      <PageTitle titleText={page.titleText} />

      <div id="main" className="campl-row campl-content campl-recessed-content">
        <div className="campl-wrap clearfix">
          <div className="campl-column3">
            <h2> Local nav</h2>
          </div>
          <div className="campl-column6  campl-main-content" id="content">
            {children}
          </div>
          <div className="campl-column3 campl-secondary-content">
            <h2>Sidebar stuff</h2>
          </div>
        </div>
      </div>
      <PlFooter />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
