import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default ({ data }) => {
  const post = data.nodeArticle
  const pageData = {
    titleText: post.title,
  }
  return (
    <Layout page={pageData}>
      <div>
        <div
          style={{ maxWidth: `900px`, marginBottom: `1.45rem`, width: `100%` }}
        >
          <Img
            fluid={
              post.relationships.field_image.localFile.childImageSharp.fluid
            }
          />
        </div>
        <small>
          <em>{Date(post.created)}</em>
        </small>
        <div dangerouslySetInnerHTML={{ __html: post.body.value }}></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    nodeArticle(id: { eq: $id }) {
      title
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
`
