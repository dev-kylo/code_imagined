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

import { getQuickLinks } from '../utils/quickLinksFormatters'

export default function Post({ data }) {
    if (!data) return null

    console.log(data)

    const post = data.prismicPost.data
    const title = post.title.text || 'Untitled'
    const desc = post.short_desc.text

    // { label: string; link: string; order: number }[];

    // function isActive({ href, location }) {
    //     const [, , module, pageName] = href.split('/')
    //     const { hash, pathname } = location
    //     const currentUrl = `${pathname}${hash}`
    //     const classNames = []

    //     console.log({ module, pageName, currentUrl, classNames })

    //     return true
    // }

    const subheadings = getQuickLinks(data.prismicPost)

    return (
        <PostWrapper postTheme postTitle={title} description={desc}>
            <PageTitle postTitle>{title}</PageTitle>
            <Grid mx={15}>
                <Grid.Col xs={12} lg={9} orderSm={2}>
                    <TextContainer>
                        <TableOfContents links={subheadings} />
                        <SliceZone slices={post.body} components={components} />
                    </TextContainer>
                </Grid.Col>
                <Grid.Col xs={12} lg={3} orderSm={1}>
                    <StickyWrapper>
                        <ScrollArea.Autosize scrollbarSize={16} h="auto" offsetScrollbars>
                            <PostLabelsList
                                postsData={data.allPrismicPost.nodes}
                                title="Related Posts"
                                tag={data.prismicPost?.tags?.length > 0 ? data.prismicPost.tags[0] : 'none'}
                                currentId={data.prismicPost?.id}
                            />
                            <PostLabelsList
                                postsData={data.allPrismicPost.nodes}
                                title="Most Recent"
                                currentId={data.prismicPost?.id}
                            />
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
            tags
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
        allPrismicPost(filter: { data: { standalone: { ne: true } } }, sort: { data: { published: DESC } }) {
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
