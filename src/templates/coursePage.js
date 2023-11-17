import React from 'react'
import { SliceZone } from '@prismicio/react'
import { graphql } from 'gatsby'
import { Grid } from '@mantine/core'
import PageTitle from '../components/UI/pageTitle.styled'
import { TextContainer } from '../components/layout/containers/textContainer'
import { components } from '../slices'
import PostWrapper from '../providers/PostWrapper'
// import SignUpWall from '../features/courses/signUpWall'
import { getQuickLinks } from '../utils/quickLinksFormatters'
import { TableOfContents } from '../features/posts/tableOfContents'
import CoursePages from '../features/courses/coursePages'
import NextPageButton from '../features/courses/nextPageButton'

export default function CoursePage({ data }) {
    if (!data) return null

    const post = data.prismicCoursePage?.data
    const title = post.title.text || 'Untitled'
    const desc = post.short_desc.text
    const course = data.prismicCourse
    const subheadings = getQuickLinks(data.prismicCoursePage)

    return (
        <PostWrapper postTheme postTitle={title} description={desc}>
            <PageTitle postTitle>{title}</PageTitle>
            <Grid mx={15}>
                <Grid.Col xs={12} lg={9} orderSm={2}>
                    <TextContainer>
                        {/* <SignUpWall> */}
                        {subheadings && subheadings.length > 0 ? (
                            <TableOfContents links={subheadings} defaultOpen={false} />
                        ) : null}
                        <SliceZone slices={post.body} components={components} />
                        <div style={{ marginTop: '4rem' }}>
                            <NextPageButton
                                courseUid={course.uid}
                                currentPageId={data.prismicCoursePage.id}
                                pages={course.data.course_pages}
                            />
                        </div>
                        {/* </SignUpWall> */}
                    </TextContainer>
                </Grid.Col>
                <Grid.Col xs={12} lg={3} orderSm={1}>
                    <CoursePages
                        showIcon
                        courseUid={course.uid}
                        currentPageId={data.prismicCoursePage.id}
                        title={course?.data?.title.text}
                        pages={course.data.course_pages}
                    />
                </Grid.Col>
            </Grid>
        </PostWrapper>
    )
}

export const query = graphql`
    query CoursePageQuery($pageId: ID, $courseId: ID) {
        prismicCoursePage(prismicId: { eq: $pageId }) {
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
        prismicCourse(prismicId: { eq: $courseId }) {
            uid
            data {
                visible
                title {
                    text
                }
                course_pages {
                    course_page {
                        uid
                        document {
                            ... on PrismicCoursePage {
                                id
                                uid
                                data {
                                    title {
                                        text
                                    }

                                    thumbnail {
                                        gatsbyImageData(width: 250)
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
