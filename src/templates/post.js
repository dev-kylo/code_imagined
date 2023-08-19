import React from 'react'
import { SliceZone } from '@prismicio/react'
import { graphql } from 'gatsby'
import { Grid, ScrollArea } from '@mantine/core'
import PageTitle from '../components/UI/pageTitle.styled'
import { TextContainer } from '../components/layout/containers/textContainer'
import { components } from '../slices'
import PostWrapper from '../providers/PostWrapper'
import PostLabelsList from '../features/posts/postLabelsList'

import { TableOfContents } from '../features/posts/tableOfContents'
import StickyWrapper from '../components/UI/stickyWrapper'
import { DesktopDisplay } from '../components/layout/containers/containers.styled'

export default function Post({ data }) {
    if (!data) return null

    const post = data.prismicPost.data
    const title = post.title.text || 'Untitled'
    const desc = post.short_desc.text

    // { label: string; link: string; order: number }[];

    const contents = [
        {
            label: 'How much does it cost?',
            link: '/john',
            order: 1,
        },
        {
            label: 'When does it go live?',
            link: '/team',
            order: 1,
        },
        {
            label: 'Will the course remain open?',
            link: '/paul',
            order: 1,
        },
    ]

    // function isActive({ href, location }) {
    //     const [, , module, pageName] = href.split('/')
    //     const { hash, pathname } = location
    //     const currentUrl = `${pathname}${hash}`
    //     const classNames = []

    //     console.log({ module, pageName, currentUrl, classNames })

    //     return true
    // }

    return (
        <PostWrapper postTheme postTitle={title} description={desc}>
            <PageTitle postTitle>{title}</PageTitle>
            <Grid mx={15}>
                <Grid.Col xs={12} lg={9} orderSm={2}>
                    <TextContainer>
                        <SliceZone slices={post.body} components={components} />
                    </TextContainer>
                </Grid.Col>
                <Grid.Col xs={12} lg={3} orderSm={1}>
                    <StickyWrapper>
                        <ScrollArea.Autosize scrollbarSize={16} h="auto" offsetScrollbars>
                            <DesktopDisplay>
                                <TableOfContents links={contents} active="/team" />
                            </DesktopDisplay>
                            <PostLabelsList postsData={data.allPrismicPost.nodes} />
                        </ScrollArea.Autosize>
                    </StickyWrapper>
                </Grid.Col>
            </Grid>
        </PostWrapper>
    )
}

export const query = graphql`
    query BlogPostQuery($id: String) {
        prismicPost(id: { eq: $id }) {
            id
            uid
            type
            data {
                published
                title {
                    text
                }
                short_desc {
                    text
                }
                body {
                    ... on PrismicSliceType {
                        id
                        slice_label
                        slice_type
                    }
                    ...PostDataBodyImage
                    ...PostDataBodyText
                    ...PostDataBodyCode
                    ...PostDataBodyGallery
                    ...PostDataBodyButton
                    ...PostDataBodyVideo
                    ...PostDataBodySignUp
                    ...PostDataBodyForm
                }
            }
        }
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
