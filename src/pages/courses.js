/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { graphql } from "gatsby"
import Providers from "../providers/Providers"
import PageTitle from "../components/UI/pageTitle.styled"

import CoursesList from "../features/courses/coursesList"
import SignUp from "../features/signup/signup.styled"
import SEO from "../layout/seo"

function Courses({ data }) {
  return (
    <>
      <SEO
        title="Free & Premium Courses"
        description="A list of The Great Sync's online courses, both free and premium courses. Subscribe to gain access or learn more."
      />
      <Providers>
        <PageTitle>Free & Premium Courses</PageTitle>
        <CoursesList courses={data.allPrismicCourse.nodes} />
        <SignUp />
      </Providers>
    </>
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
