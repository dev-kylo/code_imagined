/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Container } from '@mantine/core'
import { graphql } from 'gatsby'
import Providers from '../providers/Providers'
import PageTitle from '../components/UI/pageTitle.styled'
import PostsList from '../features/posts/postsList'

function Blog({ data }) {
    console.log(data)

    return (
        <Providers>
            <PageTitle postTitle>The Great Sync Blog</PageTitle>
            <Container py="xl">
                <PostsList posts={data.allPrismicPost.nodes} />
            </Container>
        </Providers>
    )
}

export const query = graphql`
    query BlogQuery {
        allPrismicPost(filter: { tags: { eq: "courseUpdate" } }, sort: { data: { published: DESC } }) {
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
