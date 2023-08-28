import React from 'react'
import { SliceZone } from '@prismicio/react'
import { graphql } from 'gatsby'
import { Grid } from '@mantine/core'
import PageTitle from '../components/UI/pageTitle.styled'
import { TextContainer } from '../components/layout/containers/textContainer'
import { components } from '../slices'
import PostWrapper from '../providers/PostWrapper'

export default function Course({ data }) {
    if (!data) return null

    console.log(data)

    const post = data.prismicCourse.data
    const title = post.title.text || 'Untitled'
    const desc = post.short_desc.text

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
                    {/* <TableOfContents links={subheadings} /> */}
                    <h2>Course Contents</h2>
                </Grid.Col>
            </Grid>
        </PostWrapper>
    )
}

export const query = graphql`
    query CourseQuery($id: ID) {
        prismicCourse(prismicId: { eq: $id }) {
            data {
                type
                visible
                title {
                    text
                }
                short_desc {
                    text
                }
                course_pages {
                    course_page {
                        uid
                    }
                }
                body {
                    ... on PrismicSliceType {
                        id
                        slice_label
                        slice_type
                    }
                    ...CourseComponentCode
                    ...CourseComponentImage
                    ...CourseComponentText
                    ...CourseComponentVideo
                    ...CourseComponentGallery
                    ...CourseComponentButton
                    ...CourseComponentSignUp
                    ...CourseComponentForm
                }
            }
            type
        }
    }
`
