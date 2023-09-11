import React, { useEffect } from 'react'
import { SliceZone } from '@prismicio/react'
import { graphql } from 'gatsby'
import { Flex, Grid } from '@mantine/core'
import PageTitle from '../components/UI/pageTitle.styled'
import { TextContainer } from '../components/layout/containers/textContainer'
import { components } from '../slices'
import PostWrapper from '../providers/PostWrapper'
import CoursePages from '../features/courses/coursePages'
import { Button } from '../components/UI/button.styled'
import { getQuickLinks } from '../utils/quickLinksFormatters'
import { TableOfContents } from '../features/posts/tableOfContents'
import StickyWrapper from '../components/UI/stickyWrapper'
import { checkForValidUser } from '../features/courses/signUpWall'

const StartCourseButton = ({ link, size = 'medium' }) => (
    <Flex justify="center">
        <Button link={link} size={size}>
            Start Course
        </Button>
    </Flex>
)

export default function Course({ data }) {
    useEffect(() => {
        checkForValidUser()
    }, [])

    console.log(data)

    const post = data.prismicCourse.data
    const title = post.title.text || 'Untitled'
    const desc = post.short_desc?.text
    const isFree = post.type === 'free'
    // const isVisible = post.visible
    const { uid } = data.prismicCourse
    const firstPageUid = post.course_pages && post.course_pages[0].course_page.uid
    const subheadings = getQuickLinks(data.prismicCourse)

    return (
        <PostWrapper postTheme postTitle={title} description={desc}>
            <PageTitle postTitle>{title}</PageTitle>
            <Grid mx={15}>
                <Grid.Col xs={12} lg={9} orderSm={2}>
                    <TextContainer>
                        <SliceZone slices={post.body} components={components} />
                        <Flex justify="center">
                            {isFree && <StartCourseButton link={`/courses/${uid}/${firstPageUid}`} />}
                        </Flex>
                    </TextContainer>
                </Grid.Col>
                <Grid.Col xs={12} lg={3} orderSm={1}>
                    {isFree && (
                        <>
                            <CoursePages pages={post.course_pages} courseUid={data.prismicCourse.uid} />
                            <StartCourseButton link={`/courses/${uid}/${firstPageUid}`} size="small" />
                        </>
                    )}
                    {!isFree && (
                        <StickyWrapper>
                            <TableOfContents links={subheadings} />
                        </StickyWrapper>
                    )}
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
            uid
        }
    }
`
