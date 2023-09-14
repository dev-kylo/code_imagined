import React from 'react'
import { Link } from 'gatsby'
// import { CourseCard } from '../../components/UI/courseCard'
import styled from 'styled-components'
import CourseCardSecondary from '../../components/UI/courseCardSecondary'

const Grid = styled.div`
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 780x) {
        grid-template-columns: 1fr;
    }
`

function CoursesList({ courses }) {
    const cards = courses.map(course => (
        <Link key={course.uid} to={`/courses/${course.uid}`} style={{ textDecoration: 'none' }}>
            {/* <CourseCard
                link={`/courses/${course.uid}`}
                title={course.data.title.text}
                image={course.data.cover.gatsbyImageData.images.fallback.src}
                type={course.data.type}
                description={course.data.short_desc.text}
            /> */}
            <CourseCardSecondary
                image={course.data.cover.gatsbyImageData.images.fallback.src}
                title={course.data.title.text}
                publishDate={course.data.short_desc.text}
                type={course.data.type}
                link={`/courses/${course.uid}`}
            />
        </Link>
    ))

    return <Grid>{cards}</Grid>
}

export default CoursesList
