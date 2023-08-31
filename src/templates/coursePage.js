import React from 'react'
import { SliceZone } from '@prismicio/react'
import { graphql } from 'gatsby'
import { Grid } from '@mantine/core'
import PageTitle from '../components/UI/pageTitle.styled'
import { TextContainer } from '../components/layout/containers/textContainer'
import { components } from '../slices'
import PostWrapper from '../providers/PostWrapper'
import SignUpWall from '../features/courses/signUpWall'

export default function CoursePage({ data }) {
    if (!data) return null

    console.log(data)

    const post = data.prismicCoursePage.data
    const title = post.title.text || 'Untitled'
    const desc = post.short_desc.text

    return (
        <PostWrapper postTheme postTitle={title} description={desc}>
            <PageTitle postTitle>{title}</PageTitle>
            <Grid mx={15}>
                <Grid.Col xs={12} lg={9} orderSm={2}>
                    <TextContainer>
                        {/* <TableOfContents links={subheadings} /> */}
                        <SignUpWall>
                            <SliceZone slices={post.body} components={components} />
                        </SignUpWall>
                    </TextContainer>
                </Grid.Col>
                <Grid.Col xs={12} lg={3} orderSm={1}>
                    <h2>Stuff</h2>
                </Grid.Col>
            </Grid>
        </PostWrapper>
    )
}

export const query = graphql`
    query CoursePageQuery($id: ID) {
        prismicCoursePage(prismicId: { eq: $id }) {
            id
            uid
            type
            tags
            data {
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
                    ...CoursePageComponentCode
                    ...CoursePageComponentImage
                    ...CoursePageComponentText
                    ...CoursePageComponentVideo
                    ...CoursePageComponentGallery
                    ...CoursePageComponentButton
                    ...CoursePageComponentSignUp
                    ...CoursePageComponentForm
                }
            }
        }
    }
`
