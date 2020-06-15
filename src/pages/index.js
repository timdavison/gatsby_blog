import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const pageData = {
  titleText: "List of Posts.",
}

const IndexPage = ({ data }) => (
  <Layout page={pageData}>
    <SEO title="Home" />
    <h1>Hi there Tim.</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {data.allNodeArticle.edges.map(edge => (
      <>
        <h3>
          <Link to={edge.node.id}>{edge.node.title}</Link>
        </h3>
        <small>
          <em>{Date(edge.node.created)}</em>
        </small>
        <div
          style={{
            maxWidth: `300px`,
            marginBottom: `1.45rem`,
            width: `100%`,
          }}
        >
          <Img
            fluid={
              edge.node.relationships.field_image.localFile.childImageSharp
                .fluid
            }
          />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              edge.node.body.value
                .split(" ")
                .splice(0, 50)
                .join(" ") + "...",
          }}
        ></div>
      </>
    ))}

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allNodeArticle {
      edges {
        node {
          title
          id
          body {
            value
          }
          created
          relationships {
            field_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
