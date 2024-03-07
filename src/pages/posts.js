/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Container } from "@mantine/core"
import { graphql } from "gatsby"
import Providers from "../providers/Providers"
import PageTitle from "../components/UI/pageTitle.styled"
import PostsList from "../features/posts/postsList"
import SEO from "../layout/seo"

function Blog({ data }) {
  return (
    <>
      <SEO
        title="The Great Sync Blog"
        descrption="Blogs and articles from The Great Sync JavaScript mental model, with tips and advice for gaining confidence over JavaScript."
      />
      <Providers>
        <PageTitle postTitle>The Great Sync Blog</PageTitle>
        <Container py="xl">
          <PostsList posts={data.allPrismicPost.nodes} />
        </Container>
      </Providers>
    </>
  )
}

export const query = graphql`
  query BlogQuery {
    allPrismicPost(
      filter: { data: { standalone: { ne: true } } }
      sort: { data: { published: DESC } }
    ) {
      nodes {
        id
        uid
        data {
          title {
            text
          }
          published
        }
        last_publication_date
        tags
      }
    }
  }
`

export default Blog
