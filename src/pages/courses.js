/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { graphql } from 'gatsby'
import Providers from '../providers/Providers'
import PageTitle from '../components/UI/pageTitle.styled'

import CoursesList from '../features/courses/coursesList'
import SignUp from '../features/signup/signup.styled'

function Courses({ data }) {
    return (
        <Providers>
            <PageTitle>Free & Premium Courses</PageTitle>
            <CoursesList courses={data.allPrismicCourse.nodes} />
            <SignUp />
        </Providers>
    )
}

export const query = graphql`
    query CoursesQuery {
        allPrismicCourse(sort: { data: { type: DESC } }) {
            nodes {
                id
                uid
                type
                data {
                    course_pages {
                        course_page {
                            id
                            uid
                        }
                    }
                    type
                    cover {
                        gatsbyImageData(width: 400)
                        alt
                    }
                    title {
                        text
                    }
                    short_desc {
                        text
                    }
                }
            }
        }
    }
`

export default Courses
